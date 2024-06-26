import React from "react";
import { TitleText } from "@shared/ui/title-text";
import { ContentText } from "@shared/ui/content-text";

const Payment = () => {
  return (
    <div>
      <TitleText text="Способы оплаты" />
      <ContentText>
        <div className=" mb-[15px]">
          <br />
          <span>Вы можете произвести оплату на нашем сайте с помощью банковской карты Visa, Mastercard и МИР, также платежных систем: СБП, Tinkoff Pay, Яндекс Pay.</span>
          <br />
          <br />
          <span>Мы стремимся обеспечить гибкость и удобство в оплате, чтобы соответствовать вашим потребностям.</span>
          <br />
          <br />
          <span>
         Если у вас возникли вопросы или требуется дополнительная информация о условиях оплаты, обратитесь к нашей службе поддержки клиентов. Мы всегда готовы помочь вам с любыми вопросами, связанными с покупками и оплатой.
        </span>
        </div>
      </ContentText>
      <TitleText text={"Оплата с помощью сервиса “Долями”"} />
      <ContentText>
        <br />
        <span>Долями — это сервис оплаты покупок частями без переплаты и необходимости оформлять какие-либо документы. Такие сервисы называются BNPL — Buy Now Pay Later, что переводится как «купи сейчас, плати потом».</span>
        <br />
        <br />
        <span>Сумма покупки делится на четыре платежа: первая часть вносится при оформлении заказа, оставшиеся три части будут автоматически списываться c карты с шагом в две недели. При этом заказ отправляется Вам после оплаты первой части. Следить за оплатой заказа после его оформления вы сможете в приложении «Долями». </span>
        <br />
        <br />
        <span>Сумма заказа, который вы планируете оплатить частями, не может превышать 30 000 рублей.</span>
        <br />
        <br />
        <span>Комиссии за оплату Долями нет — сервис бесплатный.</span>
        <br />
        <br />
        <span>Оплатить товары можно картами любых платежных систем следующим образом:</span>
        <br />
        <br />
        <span>1. Сформируйте корзину с покупками на сайте <br />
2. Выберите сервис «Долями» в качестве способа оплаты<br />
3. Укажите ФИО, дату рождения, номер телефона и e-mail<br />
4. Оплатите 25% общей стоимости онлайн при оформлении заказа<br />
5. Оставшиеся три части платежа будут списаны с вашего счета с интервалом в две недели, перед каждым платежом сервис будет присылать вам предварительное напоминание о дате списания
</span>
        <br />
        <br />
        <span>По всем вопросам связанных с сервисом, обращайтесь в службу поддержки «Долями»: 8 800 555 47 74. Она работает круглосуточно, без выходных и праздников.</span>
        <br />
        <br />
        <span>Можно задать вопрос, нажав на кнопку чата в правом нижнем углу на сайте dolyame.ru или в чате приложения «Долями».</span>
        <br />
        <br />
        <span className="font-semibold">При оформлении покупки на нашем сайте через сервис «Долями» воспользоваться промокодом и баллами по программе лояльности невозможно.</span>
      </ContentText>
    </div>
  );
};

export default Payment;