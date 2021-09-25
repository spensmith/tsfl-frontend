import * as React from "react";

function FileSelector() {
    function handleChange(banana: FileList | null) {
        console.log(banana);
    }

    return <div>
        <input
            type="file"
            onChange={(e) => handleChange(e.target.files)}
        />
    </div>;

}

export default FileSelector