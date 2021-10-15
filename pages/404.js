import { useRouter } from "next/router"
import { useEffect } from "react";
import { basePath } from "../next.config";

export default function Custom404() {
    const router = useRouter();

    if ("/quantum-tracer" == router.basePath & !router.asPath.includes("gist")) {
        useEffect(() => {
            router.push({pathname: "/gist/" + router.asPath});
        });
        return (
            <div className="loading">
                loading gist...
            <style jsx>{`
            .loading {
                padding: 50px;
            }
            `}</style>
            </div>
        )
    } else {

        return (
            <div className="container">
                <div>
                <h1>
                    404
                </h1>
                <div className="sep">
                    <h2>
                    This page could not be found.
                    </h2>
                </div>
                </div>
                <style jsx>{`
                    body {
                        margin: 0
                    }
                    .container {
                        color:#000;
                        background:#fff;
                        font-family:-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
                        height:100vh;
                        text-align:center;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center
                    }
                    h1 {
                        display:inline-block;
                        border-right:1px solid rgba(0, 0, 0,.3);
                        margin:0;
                        margin-right:20px;
                        padding:10px 23px 10px 0;
                        font-size:24px;
                        font-weight:500;
                        vertical-align:top
                    }
                    h2 {
                        font-size:14px;
                        font-weight:normal;
                        line-height:inherit;
                        margin:0;
                        padding:0
                    }
                    .sep {
                        display:inline-block;
                        text-align:left;
                        line-height:49px;
                        height:49px;
                        vertical-align:middle
                    }
                `}</style>
            </div>
        )
    }
}
