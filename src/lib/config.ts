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
    API_HOST: "https://6001a30308587400174db2f6.mockapi.io/",
    API_PATH: "/api/v1/",
  },
  production: {
    API_HOST: "https://6001a30308587400174db2f6.mockapi.io/",
    API_PATH: "/api/v1/",
  },
};

export default { ...CommonConfig, ...EnvConfig[ENV] };
