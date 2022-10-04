const HttpSender = async() => {

    // 통신
    setLoging(true);
    const req = {
        act_type: 'board_list',
        board_type:'notice',
        find_word:pageForm.find_word,
        page: pageForm.page,
    }
    var params = new URLSearchParams(req);
    axios.post(process.env.REACT_APP_API_URL + "board.php", params).then((response) => {
            switch (response.data.result) {
                case "OK":
                    setResponse(response)
                    // console.log(response)
                    setLoging(false);
                    break;

                default:
                    confirmAlert({
                        title: '실패',
                        message: response.data.err_msg,
                        buttons: [{
                            label: '확인',
                        }]
                    });
                    break;
            }
        })
        .catch((err) => {
            console.log(err);
            setError(true)
        });
};

useLayoutEffect(() => {
    HttpSender()
},[updateTime])