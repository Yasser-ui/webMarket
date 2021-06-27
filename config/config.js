const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUrl: process.env.MONGODB_URL ||
      process.env.MONGO_HOST ||
      'mongodb://' + (process.env.IP || "localhost") + ':' +
      (process.env.MONGO_PORT || '27017') +
      '/webMarket',
    stripe_connect_test_client_id: 'cus_Jj13abtqVne5zO',
    stripe_test_secret_key: 'sk_test_51J5YaSGFxKsI4hRj89X72y0rh7jzomtjqCMhT5rJJJuoTqdTOetn3IaVpuV521GCbWXY0fM4wzw1RNYfHuEqlHnD00oSi3qcMa',
    stripe_test_api_key: 'pk_test_51J5YaSGFxKsI4hRj7fvSsyvOuodmHv9qXd5S7HVZDD9dFZBLaNhEzzc9izrTjlYHpSlJz8Fc2f2BzPyrWVhDExo700kJb5GZnZ'
  }
  
  export default config
  