export default class PhoneInputService {
  static async getAllCodes() {
    // return $apiWithoutGuard.get("auth/phone-code/");
  }

  static async getCodesById(phoneCode: string) {
    //   return $apiWithoutGuard.get("auth/phone-code/", {
    //     params: {
    //       q: `+${phoneCode}`,
    //     },
    //   });
    // }
    return phoneCode;
  }
}
