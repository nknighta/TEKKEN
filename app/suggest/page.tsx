import ReactSuggestionID from "./suggestComponents/Component";
import ReactSuggestionName from "./suggestComponents/Component2";
export default function Home() {
    return (
        <>
            <div className="text-3xl text-center m-5">
                鐵建社員ID入力
            </div>
            <ReactSuggestionName  />
        </>
    )
}