import {useState, useEffect} from "react";
import { List, Spin, Avatar } from "antd";


function EpisodesPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/episodes")
            .then((response) => response.json())
            .then((apiResponse) => {
                setData(apiResponse);
                setIsLoading(false);
            });
    }, []);
    return(
      <div>
        <h2 style={{margin:"20px"}} className="pageSubtitle"> Episodes List</h2>
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
                                    <Avatar src="https://toppng.com/uploads/preview/breaking-bad-logo-transparent-breaking-bad-png-transparent-breaking-bad-walter-115633594231gppzd27fh.png" />
                                }
                                    title={<h3>{` ${item.title} - ${item.series} `}</h3>}
                                    description={` Air-date:  ${item.air_date}, Starring: ${item.characters}`}
                                    

                                />
                            </List.Item>
                        )}
                    />
                </div>
            )}
        </div>
        </div>
    )
}
export default EpisodesPage