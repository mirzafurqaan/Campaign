import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe8c207a122b541031eef3151510e23799f1bd4dd'
);

export default instance;
