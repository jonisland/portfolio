import my_portuguese_certificate from "../../images/certificates/my-portuguese-certificate.jpg";

const Hobbies = () => {
  return (
    <div class="hobbies container">
      <h1 id="hobbies">Hobbies</h1>
      <div class="row container">
        <div>
          <h3 class="mb-3">Learning Languages</h3>
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>English</td>
                <td>Fluent</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Tagalog</td>
                <td>Native</td>
              </tr>
              <tr>
                <th>3</th>
                <td>
                  <a href={my_portuguese_certificate}>Portuguese</a>
                </td>
                <td>Intermediate</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Spanish</td>
                <td>Beginner</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h1>I Want to Learn more Languages</h1>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Hobbies;
