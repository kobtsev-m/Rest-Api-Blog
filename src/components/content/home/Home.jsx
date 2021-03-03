import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadImage from 'components/common/images/LoadImage';
import homeBrand from 'assets/img/homeBrand.jpg';

function Home(props) {
  return (
    <div className="jumbotron">
      <h2 className="display-4">Greet you on my blog site!</h2>
      <p className="lead">
        This is a simple blog, that is open for every person to add & read
        posts.
      </p>
      <hr className="my-4" />
      <LoadImage src={homeBrand} className="mb-3 rounded" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet
        distinctio iusto nisi nesciunt est inventore quaerat incidunt eaque?
        Dolore praesentium, explicabo beatae provident et perspiciatis
        veritatis ut delectus fugiat. Quam voluptatibus illo odio reiciendis
        nemo vitae animi tempora, distinctio rerum. Labore veniam rem error
        illo quo quis temporibus natus magni, dolor ab, hic cumque nemo.
        Doloremque provident suscipit et. Molestias vitae fugit modi veritatis
        eaque deserunt dolores itaque pariatur dolorum voluptates veniam totam
        commodi excepturi perferendis, dolorem beatae voluptate nisi rerum sed.
        Voluptates omnis fuga dolores repellat, nihil doloremque. Nemo, omnis
        quisquam porro, nihil consequuntur culpa dolorem itaque cupiditate vero
        debitis, minima consequatur quae tempore ut obcaecati voluptatem iste
        quas vel hic pariatur id adipisci voluptatibus assumenda dignissimos!
        Magnam.
      </p>
      <NavLink
        to="/posts"
        className="btn btn-white btn-lg border-secondary w-100"
      >
        Go to posts
      </NavLink>
    </div>
  );
}

export default Home;
