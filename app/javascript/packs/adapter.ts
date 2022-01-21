import adapter from 'mobx-rest-fetch-adapter'

import { apiClient } from 'mobx-rest'

const apiPath = '/api'

apiClient(adapter, { apiPath })


