const ENV = process.env.NODE_ENV || "development";

interface ConfigNode {
  API_HOST?: string;
  API_PATH?: string;
}

interface Prop {
  [key: string]: ConfigNode;
}

/**
 * Add application common configuration.
 */
const CommonConfig: ConfigNode = {};

/**
 * Add application config environment specific
 * development | production
 */
const EnvConfig: Prop = {
  development: {
    API_HOST: "https://login-server-demo-app.herokuapp.com",
    API_PATH: "/auth",
  },
  production: {
    API_HOST: "https://login-server-demo-app.herokuapp.com",
    API_PATH: "/auth",
  },
};

export default { ...CommonConfig, ...EnvConfig[ENV] };
