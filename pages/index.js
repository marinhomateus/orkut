import React from "react";
import MainGrid from "./../src/components/MainGrid";
import Box from "./../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/Comunity";

function ProfileSideBar(user) {
  return (
    <Box as="aside">
      <img
        src={`https://github.com/${user.githubUser}.png`}
        alt="Mateus Marinho"
        style={{ borderRadius: "5px" }}
      />
      {/*to use a variable on react we need to apply that syntax*/}
      <hr />
      <a className="boxLink" href="{`https://github.com/${user.githubUser}">
        @{user.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

function ProfileRelationsBox(props) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {props.title} ({props.items.length})
      </h2>

      <ul>
        {props.items.map((currentItem) => {
          return (
            <li key={currentItem.id}>
              <a
                href={`${currentItem.linkUrl}`}
                key={currentItem.title}
                target="_blank"
              >
                <img src={currentItem.imageUrl} />
                <span>{currentItem.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
}

export default function Home() {
  const githubUser = "marinhomateus";

  const [communities, setCommunities] = React.useState([]);

  const people = [
    "peas",
    "microsoft",
    "facebook",
    "felipefialho",
    "marcobrunodev",
    "marinhomateus",
  ];

  //declarar um metodo fora e utiliza-lo dentro do objeto
  const friends = [{}];

  const [followers, setFollowers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/micaelomota/followers")
      .then((response) => {
        return response.json();
      })
      .then((end) => {
        setFollowers(end);
      });

      fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': 'f19b8d7e7ffb43069cf72d103741fd',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query": `query {
          allCommunities {
            id 
            title
            imageUrl
            linkUrl
            creatorslug
          }
        }` })
      })
      .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
      .then((respostaCompleta) => {
        const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
        console.log(comunidadesVindasDoDato)
        setCommunities(comunidadesVindasDoDato)
      })
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="timelineArea" style={{ gridArea: "timelineArea" }}>
          <Box>
            <h1 className="title">Bem Vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que voce deseja fazer?</h2>
            <form
              onSubmit={function handleCreateComunity(event) {
                event.preventDefault();
                const formData = new FormData(event.target);

                const community = {
                  //{id: new Date().toISOString,}
                  title: formData.get("title"),
                  imageUrl: formData.get("imageUrl"),
                  linkUrl: formData.get("linkUrl"),
                };
                const updatedCommunities = [...communities, community];
                setCommunities(updatedCommunities);
              }}
            >
              <div>
                <input
                  required
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Coloque aqui sua URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque aqui sua URL para usarmos de capa"
                  type="url"
                />
              </div>
              <div>
                <input
                  required
                  placeholder="Coloque aqui sua URL para usarmos como link"
                  name="link"
                  aria-label="Coloque aqui sua URL para usarmos como link"
                  type="url"
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>
        <div className="comunityArea" style={{ gridArea: "comunityArea" }}>
          <ProfileRelationsBox title="Seguidores" items={followers} />
          <ProfileRelationsBox title="Comunidades" items={communities} />
          {/* <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>

            <ul>
              {communities.map((currentItem) => {
                return (
                  <li key={currentItem.id}>
                    <a
                      href={`${currentItem.link}`}
                      key={currentItem.title}
                      target="_blank"
                    >
                      <img src={currentItem.image} />
                      <span>{currentItem.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper> */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({people.length})</h2>
            <ul>
              {people.map((currentUser) => {
                return (
                  <li key={currentUser}>
                    <a
                      href={`https://github.com/${currentUser}`}
                      key={currentUser}
                      target="_blank"
                    >
                      <img
                        src={`https://github.com/${currentUser}.png`}
                        alt="Pessoas"
                      />
                      <span>{currentUser}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
