import {useFetch} from "@raycast/utils";
import {Detail} from "@raycast/api";

interface AiResponse {
    isLoading: boolean;
    data?: object;
}

export default function Command() {
    const {isLoading} = useFetch("http://localhost:8000/api/v1/question");
    return <Detail isLoading={isLoading} markdown="# Hello World"/>;
}