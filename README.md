# TBank Client

[![npm version](https://badge.fury.io/js/tbank-client.svg)](https://badge.fury.io/js/tbank-client)

Простой клиент для работы с API Т-Банка (Tinkoff Bank), позволяющий взаимодействовать с биржей.

## Работа с библиотекой

1. Установите зависимости через yarn:

```bash
yarn add tbank-client
```

2. Импортируйте и используйте библиотеку:

```typescript

import { TBankClient } from 'tbank-client'

const client = new TBankClient({ secret: 'your-secret' })
const response = await client.investments.findInstrument({ query: 'SNGS' })
```

## Полезные ссылки

- [T-Bank API](https://www.tbank.ru/invest/open-api/)
- [Protobuf API](https://github.com/Tinkoff/investAPI/tree/main/src/docs/contracts)
- [nice-grpc](https://github.com/deeplay-io/nice-grpc/tree/master/packages/nice-grpc#client)
- [ts-proto](https://github.com/stephenh/ts-proto)

## Contributing

Будет здорово, если библиотека будет развиваться и улучшаться. Вы можете помочь в этом, внесши свой вклад в проект. Для этого следуйте инструкциям ниже.

1. **Настройка среды**
    1. Сделайте форк репозитория.
    2. Клонируйте форкнутый репозиторий.
    3. Установите [buf](https://github.com/bufbuild/buf).
    4. Установите зависимости, запустив команду `yarn install`.
    5. Соберите проект, используя команду `yarn build`.
2. **Внесение изменений**
    1. Создайте новую ветку для ваших изменений.
    2. Внесите изменения и зафиксируйте их (commit).
    3. Отправьте ваши изменения в форкнутый репозиторий.
3. **Отправка Pull Request**
    1. Перейдите в оригинальный репозиторий на GitHub и нажмите кнопку "New pull request".
    2. Выберите свою ветку и отправьте pull request.
    3. Ожидайте проверки и исправьте замечания, если они будут.

Вы — звезда! 🌟
