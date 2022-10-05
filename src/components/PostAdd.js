import React, { Component } from "react";
import '../css/PostAdd.css';
import axios from "axios";

class PostAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    addPost = (event) => {
        event.preventDefault();

        const postContent = {
            content: this._userPostTextField.value
        }

        //jezeli post nie jest pusty
        if (postContent.content) {
            axios.post(
                'https://akademia108.pl/api/social-app/post/add',
                postContent
            ).then(res => {
                    this.setState({ message: res.data.message })
                    this.props.getNewerPosts();//zeby strona sie odswiezyla i ten nowoutworzony post sie pojawil
                    this._userPostTextField.value = '';
                }
            ).catch(error => {
                console.log(`addPost's query caused this error: ${error.message}`);
                this._userPostTextField.value = '';
                this.props.clearUserMethod();
            })
        }

    }

    render() {
        return (
            <div className="add-post">
                {
                    this.props.currentUserProp
                    &&
                    <form
                        className="form user-post-message"
                        onSubmit={e => this.addPost(e)}>
                        <textarea
                            ref={textField => this._userPostTextField = textField}
                            placeholder="Treść twojej wiadomosci..."
                        >
                        </textarea>
                        <button type="submit" className="btn btn-submit">Nowy post</button>
                    </form>
                }
            </div>
        )
    }
}

export default PostAdd;