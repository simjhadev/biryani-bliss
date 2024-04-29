import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse} from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
    //console.log("Starrrrttttttttttttt");
  try{
    const data = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
          upload_preset: 'restaurant'
        }, function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result?.secure_url);
          })
        .end(buffer);
      });
    //console.log("Dataaaaaaaaaaaaaaaaa",data);

    return new NextResponse(
        JSON.stringify({url : data}),
        { status:200 }
    );
  }catch(err){
    console.log(err);
        return new NextResponse(
            JSON.stringify({message : "Something went wrong!"})
        ,{ status : 500 })
  }

  

  
  //return Response.json({ url : data });
}