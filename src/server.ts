import appInit from "./app";

const server = async () => {
    try {
        const app = await appInit();
        app.listen(app.get("port"), () => {
            console.log("!!!!!!!!!");
        });
    } catch (err) {
        console.log(err);
    }
}

export default server();