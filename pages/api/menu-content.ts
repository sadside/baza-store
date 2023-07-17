import type { NextApiRequest, NextApiResponse } from 'next'


const menuContent = JSON.parse(`[
  {
      "id": 1,
      "name": "Тест для сайта",
      "slug": "test-dlia-saita",
      "children": [
          {
              "id": 2,
              "name": "Юбки",
              "slug": "test-dlia-saita-iubki",
              "children": []
          },
          {
              "id": 3,
              "name": "Кардиганы",
              "slug": "test-dlia-saita-kardigany",
              "children": []
          },
          {
              "id": 4,
              "name": "Кардиган + юбка",
              "slug": "test-dlia-saita-kardigan-iubka",
              "children": []
          }
      ]
  },
  {
      "id": 5,
      "name": "Женское",
      "slug": "zhenskoe",
      "children": [
          {
              "id": 6,
              "name": "Пиджаки",
              "slug": "zhenskoe-pidzhaki",
              "children": []
          },
          {
              "id": 9,
              "name": "Джинсы",
              "slug": "zhenskoe-dzhinsy",
              "children": []
          },
          {
              "id": 10,
              "name": "Рубашки и топы",
              "slug": "zhenskoe-rubashki-i-topy",
              "children": []
          },
          {
              "id": 11,
              "name": "Джоггеры и шорты",
              "slug": "zhenskoe-dzhoggery-i-shorty",
              "children": []
          },
          {
              "id": 14,
              "name": "Платья и юбки",
              "slug": "zhenskoe-platia-i-iubki",
              "children": []
          },
          {
              "id": 15,
              "name": "Обувь",
              "slug": "zhenskoe-obuv",
              "children": []
          },
          {
              "id": 16,
              "name": "Нижнее бельё",
              "slug": "zhenskoe-nizhnee-belio",
              "children": []
          },
          {
              "id": 19,
              "name": "Худи и свитшоты",
              "slug": "zhenskoe-khudi-i-svitshoty",
              "children": []
          },
          {
              "id": 20,
              "name": "Льняная коллекция",
              "slug": "zhenskoe-lnianaia-kollektsiia",
              "children": []
          },
          {
              "id": 22,
              "name": "Футболки",
              "slug": "zhenskoe-futbolki",
              "children": []
          },
          {
              "id": 30,
              "name": "Боди",
              "slug": "zhenskoe-bodi",
              "children": []
          }
      ]
  },
  {
      "id": 27,
      "name": "Мужское",
      "slug": "muzhskoe",
      "children": [
          {
              "id": 36,
              "name": "Одежда",
              "slug": "odezhda",
              "children": [
                  {
                      "id": 38,
                      "name": "CSH BAZA",
                      "slug": "csh-baza",
                      "children": []
                  },
                  {
                      "id": 35,
                      "name": "Костюмы BAZA",
                      "slug": "kostiumy-baza",
                      "children": [
                          {
                              "id": 39,
                              "name": "Свечи BAZA",
                              "slug": "svechi-baza",
                              "children": []
                          }
                      ]
                  }
              ]
          },
          {
              "id": 37,
              "name": "Головные уборы",
              "slug": "golovnye-ubory",
              "children": []
          }
      ]
  }
]`);


export default function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	console.log(req)
	res.status(200).json(menuContent)
}
