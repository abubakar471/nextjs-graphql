import {findByZip} from "@/mongoose/weather/service";
import {NextRequest, NextResponse} from "next/server";

type RouteContext = {
    params: Promise<{zip: string}>
};

export async function GET(_: NextRequest, {params} : RouteContext) {
    const {zip} = await params;
    let data = await findByZip(zip);

    return NextResponse.json(data, {status : 200});
}
