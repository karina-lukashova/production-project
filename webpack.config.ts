import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { buildWebpackCOnfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };
  
  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development';
  
  const config: webpack.Configuration = buildWebpackCOnfig({
    mode,
    paths: paths,
    isDev,
    port
  });

  return config;
};