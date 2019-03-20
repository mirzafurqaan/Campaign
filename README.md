Details of kickstart campaign use case:
•	KickStart campaign helps the people who wants some resources for their projects but unable to buy. For these people crowdfunding is done at kickStart campaign. 
•	There can be many contributors who wants to contribute to the people who wants funds.
•	The person who need funds can make request and its request will have different contributors and approvers.
•	When all approvers will approve the request then it will be finalized and fund will be transferred to the requestor.
Execute of contract:

a.	First, we will write contract in the remix- http://remix.ethereum.org
b.	Link for solidity contract- https://github.com/mirzafurqaan/solidity-Example/blob/master/Campaign.sol or copy from below.
Note: Make sure the compiler version in the contract and in the remix are same.
c.	While compiling, it will create 2 contract campaign and campaignFactory. First, deploy campaignFactory. Choose the proper account from metamask.
d.	At createCampaign, give some amount to contribute to the requestor and click createCampaign.
e.	Now to deploy the campaign contract copy the address from getDeployedCampaigns and paste it in  At Address field, also choose ‘campaign’ contract and click At Address button. It will create a campaign.
f.	Requestor can request for funds to purchase the items, he must enter the details like item name, amount, and recipient address. By providing this detail a request is created.
g.	There will be approvers to approve the request of the requestor. At the end it will be finalized, and transaction will be done.

