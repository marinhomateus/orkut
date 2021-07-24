import { SiteClient } from "datocms-client";

export default async function requestReciver(request, response) {
  if (request.method === "POST") {
    const TOKEN = "4fe0cf0a51197db9e0db984aef9f92";
    const client = new SiteClient(TOKEN);

    const record = await client.items.create({
      itemType: "979707",
      title: "Test",
      imageUrl: "https://github.com/gvanrossum.png",
      linkUrl: "https://github.com/gvanrossum",
      creatorslug: "gvanrossum",
    });
    response.json({
      record: record,
    });
  }
}
