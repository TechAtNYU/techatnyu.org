import { NextApiHandler } from "next";
import axios from "axios";
import querystring from "querystring";

const contact: NextApiHandler = async (req, res) => {
    const link = "https://docs.google.com/forms/d/e/1FAIpQLSfkETyG8-Wdvh-sMsOR76cJxgzJtQFuPDMQ6o5-b3l4exiYhA/formResponse";
    const headers = {"Content-Type": "application/x-www-form-urlencoded"};
    console.log(JSON.stringify(req.body));
    console.log()
    console.log(" the body is above")
    const response =
        await axios.post(
            link,
            querystring.stringify(req.body),
            {headers:headers});

    console.log("is it working");
    if (response.status === 200) {
        res.status(200).end();
    } else {
        res.status(404).end();
    }
};

export default contact;
