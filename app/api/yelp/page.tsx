import { handleError } from "@/helpers/errors";
import { NextResponse } from "next/server";

const yelp = require('yelp-fusion');
const client = yelp.client(process.env.YELP_API_KEY);
 

export default function GET() {  
  client.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca',
  }).then((response: any) => {
    console.log(response.jsonBody.businesses[0].name);
    return NextResponse.json({
        success: true,
        response
    })
  }).catch((e: any) => {
    console.log(e);
    return handleError(e);
  });
}