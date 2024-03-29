import React from "react";
import Parent from "./Parent";

const Test1 = () => {

    const styles = {
        box: {
            border: '1px solid black',
            padding: '0 20px 20px',
        }
    };

    return (
        <div style={styles.box}>
            <h2>Test1</h2>
            <p>
                Parent 와 Child 컴포넌트 간에 데이터 전달<br/>
                데이터를 Parent 에 정의
            </p>
            <Parent />
        </div>
    );
}

export default Test1;
