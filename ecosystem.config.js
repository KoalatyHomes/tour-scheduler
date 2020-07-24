module.exports = {
  apps : [{
    name: "home-listings-images",
    script: "server/index.js",
    exp_backoff_restart_delay: 100,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}