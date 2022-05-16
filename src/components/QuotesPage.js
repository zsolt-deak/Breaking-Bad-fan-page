import { useState, useEffect } from "react";
import { List, Avatar, Spin } from "antd";

function QuotesPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/quotes")
            .then((response) => response.json())
            .then((apiResponse) => {
                setData(apiResponse);
                setIsLoading(false);
            });
    }, []);
    return (
        <div>
        <h2 style={{margin:"20px"}} className="pageSubtitle"> Quotes List</h2>
        <div>
            {isLoading ? (
                <div id="spinnerContainer">
                    <Spin tip="Loading quotes..." size="large" />
                </div>
            ) : (
                <div style={{ padding: "24px" }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png" />
                                    }
                                    title={<h3>{item.author}</h3>}
                                    description={item.quote}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            )}
        </div>
        </div>
    );
}
export default QuotesPage;
