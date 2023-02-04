import "./styles.css";
/// You can use either one of the following imports:
import Web3 from "web3";
/// Contains needed settings, as nodeUrl, contractAddress, and abi
import { settings } from "./settings";
/// Empties the list
import { resetList, setLoading, addProposalToList } from "./utils";

const main = async () => {
  setLoading(true);

  const web3 = new Web3(new Web3.providers.HttpProvider(settings.nodeUrl));
  const contract = new web3.eth.Contract(
    settings.contractAbi,
    settings.contractAddress
  );

  const proposalsCount = await contract.methods.getProposalsCount().call();
  console.log(`There are ${proposalsCount} proposals.`);

  if (proposalsCount > 0) {
    resetList();

    for (let i = 0; i < proposalsCount; i++) {
      const proposal = await contract.methods.proposals(i).call();
      addProposalToList(proposal);
    }
  }

  setLoading(false);
};

main();
