# Options for installing Postgres

## The problem

We need a version of the Postgres server in order to develop applications independent of any live database, so that we can test new features and break things without affecting the live application.

The problem is that Postgres is not always easy to install and the issues encountered can be many and varied, so it is hard to provide any universally applicable, generic advice on how to overcome them.

Whilst we shouldn't shy away from trying to understand servers and database configuration, we also don't want to lose sight of what we're really trying to achieve, which is to make things, so we don't want to get stuck trying to understand complex server configuration issues, which are more the domain of system and database administrators.

There doesn't appear to be a clear right approach to setting up a development server - as each approach involves some form of trade off. We have therefore set out the main options, along with a brief overview of their pros and cons.

### 1 - Install using homebrew

Basics - ensure you don't already have postgres installed. Assuming you don't - install postgres with

```bash
brew update
brew install postgres
brew services start postgres
psql postgres
```

PROS:
- Once working you have a fully functional local postgres server running, which should be fast and efficient.

CONS:
- There are various issues that can come up, so there are no guarantees this will work. When things don't work, it can be really difficult to debug.

- There are numerous different versions of postgres, but you can only have one version installed at any one time, and there is a substantial cost to changing your version, which means you are unlikely to want to change the version of postgres except when absolutely necessary. This means you may end up having different development and live versions of postgres. Additionally, different developers may use different versions from each other.

## 2 - Install using a VM

...

PROS:
- Relatively simple to install a working version of Postgres, once you have the VM software installed (which is much more straightforward than installing Postgres locally).

- Easy to ensure you have the same version as the live version of Postgres.

- Easy to switch database versions (very helpful when working on multiple projects).

CONS:
- Need to install and additional VM client which creates additional complexity.

- VMs can add substantial additional load to your machine, and are often prone to memory leaks, which means the VM needs to be restarted fairly regularly.


## 3 - Install using Docker

...

PROS:
- Same pros as using a VM, but without the VM's downside of additional processor load

CONS:
- Newer, less stable tech, so more configuration issues than a VM.


## 4 - Use a cloud service for database

[ElephantSQL](https://www.elephantsql.com/) is a Postgresql as a Service service with a free tier. Limited to 5MB of data and 5 concurrent connections.

To create an account go to https://customer.elephantsql.com/login?return_url=/instance/create and sign up for an account (hint: you can sign in with Github).

Once you're signed in, you'll be taken to your dashboard. Click on the "create" button, and you will go to the database creation page. Give your database a name, choose the server location (usually somewhere close to your current location) and select the tiny-turtle free plan.

That's it, you're setup. Click on the details button next to your newly created database and you can see all your configuration details, which you'll need to use when you try to connect to it from Node.

It also comes with a simple browser console from which you can create and query tables.

PROS:
- Very simple to setup.
- Easy to share a dev server between multiple developers.

CONS:
- Can't select version of Postgres to use.
- Potential latency issues and won't work without internet.
- Doesn't come with psql (although, if you have psql installed, you can connect to your remote database from the command line by running `psql <your-elephantsql-url>`. Your elephantsql url is set out in the details tab.)
