const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="\images\lily-banse--YHSwy6uqvk-unsplash.jpg" alt="Food stuffs" />
                    <div>
                         Photo by <a href="AUTHOR_LINK">Lily Banse</a> on <a href="UNSPLASH_Link">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home