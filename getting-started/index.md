# Getting Started

**DappyKit** is a combination of technologies that allows for the creation of a decentralized social network with 1 billion users at a reasonable maintenance cost. Every developer using DappyKit gains access to all the users of other developers. All the applications from all developers are united into one social network.


## Idea

* Top Web2 social networks today are not what Web3 social networks will look like in the future.
* Web3 needs to be bold, emotional, and useful. 
* All applications in a Web3 network are a "union of peoples with different cultures and mentalities". 
* It's better to create a bold application for a small audience and solve their problems than to create applications for everyone and solve no one's problems.

```mermaid
graph TD
    DappyKit -->|Used by| Developer1[Developer 1]
    DappyKit -->|Used by| Developer2[Developer 2]
    DappyKit -->|Used by| DeveloperN[Developer N]

    Developer1 -->|Creates| App1[App 1 with DappyKit]
    Developer2 -->|Creates| App2[App 2 with DappyKit]
    DeveloperN -->|Creates| AppN[App N with DappyKit]

    App1 -->|Connects Users to| Network[Social Network]
    App2 -->|Connects Users to| Network
    AppN -->|Connects Users to| Network

    classDef dappykit fill:#f9f,stroke:#333,stroke-width:4px;
    class DappyKit dappykit;

```
