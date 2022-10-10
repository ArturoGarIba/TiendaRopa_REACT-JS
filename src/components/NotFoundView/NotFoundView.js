function NotFoundView() {
    return (
        <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oops! Something went wrong!</h4>
            <p>Hello, we don't know how you got here but this page is currently unavailable or under maintenance, we hope to hear again from you on our store page ;)</p>

                <p className="mb-0">Try to come later.</p>
        </div>
    )
}

export default NotFoundView;