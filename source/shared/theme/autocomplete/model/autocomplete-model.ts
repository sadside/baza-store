import { combine, createEvent, createStore, EventCallable, sample, split, Store, StoreWritable } from "effector";
import { createEffect } from "effector";
import { EffectState, status } from "patronum/status";
import { createFactory, invoke } from "@withease/factories";
import { debounce } from "patronum";
import { $apiWithGuard } from "@shared/api/http/axios-instance";
import axios from "axios";
import { createGate, Gate } from "effector-react";

const DEBOUNCE_TIMEOUT_IN_MS = 500;

export const createAutocomplete = createFactory(({ url }: { url: string }) => {
  const inputChanged = createEvent<string>();
  const inputChangeFinished = debounce(inputChanged, DEBOUNCE_TIMEOUT_IN_MS);
  const itemSelected = createEvent<string>();
  const outsideClicked = createEvent<void>();
  const reset = createEvent();

  const getSuggestionsFx = createEffect(async (value: string) => {
    try {
      const res = await axios.get<string[]>(url, {
        params: {
          q: value
        },
        withCredentials: true
      });

      return res.data;
    } catch (e) {
      throw new Error();
    }
  });

  const $status = status({ effect: getSuggestionsFx });
  const $inputValue = createStore<string>("").reset(reset);
  const $suggestions = createStore<string[] | null>(null).reset(reset);
  const $fieldError = createStore<string | null>(null).reset(reset);
  const $selectedItem = createStore<string | null>(null).reset(reset);
  const $outsideClicked = createStore<boolean>(false).reset(reset);
  const $isSuggestionVisible = combine(
    $suggestions,
    $selectedItem,
    $outsideClicked,
    $status,
    (items, selectedItem, outsideWasClicked, status) =>
      Boolean(!outsideWasClicked && !selectedItem && items?.length && status === "done")
  );
  const gate = createGate();

  sample({
    clock: outsideClicked,
    fn: () => true,
    target: $outsideClicked
  });

  sample({
    clock: inputChanged,
    target: $inputValue
  });

  sample({
    //@ts-ignore
    clock: inputChanged,
    fn: () => "initial",
    target: $status
  });

  sample({
    clock: inputChangeFinished,
    filter: (value) => !!value,
    target: getSuggestionsFx
  });

  sample({
    clock: getSuggestionsFx.doneData,
    target: $suggestions
  });

  sample({
    clock: inputChanged,
    source: $selectedItem,
    filter: (selectedItem) => Boolean(selectedItem),
    fn: () => null,
    target: $selectedItem
  });

  sample({
    clock: itemSelected,
    target: [$inputValue, $selectedItem]
  });

  sample({
    clock: gate.close,
    target: reset
  });

  return {
    $isVisible: $isSuggestionVisible,
    inputChanged,
    $status: $status,
    $fieldError: $fieldError,
    $inputValue: $inputValue,
    $suggestions: $suggestions,
    itemSelected,
    outsideClicked,
    $selectedItem,
    gate,
    reset
  };
});

export interface AutocompleteModel {
  $isVisible: Store<boolean>;
  inputChanged: EventCallable<string>;
  $status: StoreWritable<EffectState>;
  $fieldError: StoreWritable<string | null>;
  $inputValue: StoreWritable<string>;
  $selectedItem: StoreWritable<string | null>;
  $suggestions: StoreWritable<string[] | null>;
  itemSelected: EventCallable<string>;
  outsideClicked: EventCallable<void>;
  gate: Gate<unknown>;
  reset: EventCallable<void>;
}
