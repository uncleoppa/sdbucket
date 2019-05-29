import appInit from "./app";
import logger from "./logger";

const server = async () => {
    try {
        const app = await appInit();
        app.listen(app.get("port"), () => {
            logger.info(
                'success'
            );
        });
    } catch (err) {
        console.log(err);
    }
}

export default server();