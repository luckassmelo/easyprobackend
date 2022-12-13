module.exports = {
    apps : [{
      name: 'api-easy-notification',
      script: './dist/main.js',
      watch: './dist/main.js',
      instances: 1,
          exec_mode: 'fork',
      env: {
        EASYPRO_HOST: 'localhost',
        EASYPRO_PORT: 5432,
        EASYPRO_USER: 'process',
        EASYPRO_PASS: 'processdb',
        EASYPRO_DATABASE: 'production_manager',
        EASYPRO_SSL: true,
  
        MDC_PPB_HOST: '10.20.29.231',
        MDC_PPB_PORT: 5432,
        MDC_PPB_USER: 'dbreader',
        MDC_PPB_PASS: 'RbL6ehNgEs',
        MDC_PPB_DATABASE: 'passnt_bripv',
  
        CRONETWORK_HOST: '10.20.26.6',
        CRONETWORK_INSTANCE: 'DYNAMICS',
        CRONETWORK_PORT: 1433,
        CRONETWORK_USER: 'WReader',
        CRONETWORK_PASS: 'CWReader',
        CRONETWORK_DATABASE: 'CW'
      }
    }],
  };
  