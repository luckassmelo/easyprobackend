import "dotenv/config";



export const zebraPrinter = {
  ip: process.env.ZEBRA_IP,
  printer: process.env.ZEBRA_NAME
}

export const sapConnectionConfiguration = {
  urlToGetToken: `https://${process.env.SAP_URL}/apim/api/v1.0/centralservice/oauth/token`,
  urlToGetStockIm: `https://${process.env.SAP_URL}/api/v1.0/dl_stock_data_IM/Y_WM_IF_STOCK_IM_VIEW`,
  urlToGetStockWm: `https://${process.env.SAP_URL}/api/v1.0/dl_stock_data_WM/Y_WM_IF_STOCK_VIEW`,
  sapUser: process.env.SAP_USER_ODATA,
  sapPassword: process.env.SAP_PASSWORD_ODATA,
}

export const sapConnectionConfigurationRfc = {
  'mshost': process.env.SAP_HOST,
  'sysnr': process.env.SAP_SYSNR,
  'client': process.env.SAP_CLIENT,
  'user': process.env.SAP_USER,
  'passwd': process.env.SAP_PASSWORD,
  'r3name': process.env.SAP_R3NAME,
  'group': process.env.SAP_GROUP,
  'saprouter': process.env.SAP_SAPROUTER,
  'lang': 'EN',
}

export const pgBossConnectionString = process.env.PGBOSS_CONNECTION_STRING;
