# TrainTycoon
## An ExpressJS backend for a CRUD app

ExpressJS seems like a popular name in the tech stacks I see these days, so I whipped up a CRUD app to make sure I know how to use it to hook up to PostgresQL. I ended up using pg-promise, because that's what the Express documentation recommended--even though most information online seems to prefer pg. Offered the choice between the two, I chose to go ahead with pg-promise because I like Promises. It took me a few tries to wrap my head around pg-promise's formatting engine for the queries, but now that I have an understanding of how it works, I fully believe that it would be a powerful tool for more complex queries. 

**Currently Functional**
* '/traintycoon/stations' page supports GET, POST, PUT, DELETE HTTP methods.
    - tests using mocha-chai for these methods are operational

**Future plans**
Unlikely. It was mostly a proof-of-concept, and in the time it took me to figure out pg-promise (which I still don't regret) most of the original inspiration behind the traintycoon idea died. 