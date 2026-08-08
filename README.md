# Installing packages 

```
npm install graphql@^16.10.0 @apollo/server @as-integrations/next graphql-tag
```

# Using CURL to interact with the GraphQL API 

```
curl -X POST http://localhost:3000/api/graphql -H "Content-Type: application/json" -d '{"query" : "{hello}"}'
```

```
curl -X POST http://localhost:3000/api/graphql -H "Content-Type: application/json" -d '{"query" : "{users { id name} }"}'
{"data":{"users":[{"id":"1","name":"user 1"},{"id":"2","name":"user 2"}]}}
```

```
curl -X POST http://localhost:3000/api/graphql -H "Content-Type: application/json" -d '{"query": "{ weather(zip: \"96815\") { zip weather tempC tempF } }"}'
```

```
curl -X POST http://localhost:3000/api/graphql -H "Content-Type: application/json" -d '{"query": "{ weather(zip: \"96815\") { zip weather tempC tempF friends } }"}'
```

### Mutation AddWeather 

```
curl -X POST http://localhost:3000/api/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "mutation AddWeather($data: WeatherInput!) { weather(data: $data) { zip weather tempC tempF friends { zip weather } } }",
    "variables": {
      "data": {
        "zip": "96815",
        "weather": "Sunny",
        "tempC": "25C",
        "tempF": "77F"
      }
    }
  }'
```

### Fetch weather by zip

```
curl -X POST http://localhost:3000/api/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query GetWeather($zip: String!) { weather(zip: $zip) { zip weather tempC tempF } }",
    "variables": {
      "zip": "96815"
    }
  }'        
```

---

# Setting up testing environment (TDD = Test Driven Development)

```
npm i -D jest @types/jest ts-jest
```

Now, create a __test__ folder in your src/ directory. In package.json and a new script called 

```
{
    "scripts": {
        ...
        "test" : "jest"
    }
}
```

Now, run this command in the root directory:

```
npx ts-jest config:init
```

