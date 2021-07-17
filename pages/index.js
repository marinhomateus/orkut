import React from 'react';
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
    <Box>
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

export default function Home() {
  const githubUser = "marinhomateus";
  const [communities, setCommunities] = React.useState(['Alurakut']);
  console.log(communities)
  const people = [
    "peas",
    "microsoft",
    "facebook",
    "felipefialho",
    "marcobrunodev",
    "marinhomateus",
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="timelineArea" style={{ gridArea: "timelineArea" }}>
          <Box>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que voce deseja fazer?</h2>
            <form
              onSubmit={function handleCreateComunity(event) {
                event.preventDefault();

                const updatedCommunities = [...communities, 'Alura Stars']
                setCommunities(updatedCommunities);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque aqui sua URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque aqui sua URL para usarmos de capa"
                />
              </div>
              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>
        <div className="comunityArea" style={{ gridArea: "comunityArea" }}>
          <ProfileRelationsBoxWrapper>
            <ul>
              {communities.map((currentItem) => {
                return (
                  <li>
                    <a href={`/users/${currentItem}`} key={currentItem}>
                      <img
                        src={`https://placehold.it/300x300`}
                      />
                      <span>{currentItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({people.length})</h2>
            <ul>
              {people.map((currentUser) => {
                return (
                  <li>
                    <a href={`/users/${currentUser}`} key={currentUser}>
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
          <Box>Comunity</Box>
        </div>
      </MainGrid>
    </>
  );
}
