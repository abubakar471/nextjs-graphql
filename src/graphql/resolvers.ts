import {findByZip, updateByZip} from "@/mongoose/weather/service";

const mockUsers = [
    {id: 1, name: "user 1"},
    {id: 2, name: "user 2"}
];

interface WeatherArgs {
    zip: string;
}

declare interface WeatherInputData {
    data: {
        zip: string;
        weather: string;
        tempC: string;
        tempF: string;
        friends: string[];
    }
}

export const resolvers = {
    Query : {
        hello: () => "hello world",
        users: () => mockUsers,
        // GraphQL resolver functions receive arguments in a specific positional order, (parents, args, context, info). that's why for unused parent parameter we marked it as _
        weather: async(_: unknown, args: WeatherArgs) => {
            const data = await findByZip(args.zip);
            
            return data ? [data] : [];
        }
    },
    Mutation : {
        weather : async(_: unknown, args: WeatherInputData) => {
            await updateByZip(args.data.zip, args.data);
            const data = await findByZip(args.data. zip);

            return data ? [data]: [];
        }
    }
}
