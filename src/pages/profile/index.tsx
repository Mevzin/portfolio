import { useEffect, useState } from "react";
import { ProfileUser } from "../../models/profile.model";
import { githubApi } from "../../services/githubApi";
import { CardProfile, CardProfileInner, ImgProfile, ProfileInfo } from "./style";
import { FaUsers } from 'react-icons/fa';
import { 
  RiUserFollowFill,
  RiGitRepositoryLine
} from 'react-icons/ri';
import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';

export function Profile() {
  const [profile, setProfile] = useState<ProfileUser>((Object));

  useEffect(() => {
    async function loadProfile() {
      await githubApi.get('/users/Mevzin')
        .then((res: { data: any; }) => {
          setProfile(res.data)
        })
    }
    loadProfile();
// eslint-disable-next-line
  }, [])

  return (
    <CardProfile>
      <CardProfileInner>
        <ImgProfile src={profile.avatar_url} />
        <ProfileInfo>
          <h1>{profile.name}</h1>
          <h2><a href="https://github.com/mevzin">@{profile.login}</a></h2>
          <p>{profile.bio}</p>
          <p><RiGitRepositoryLine /> Public Repositories {profile.public_repos}</p>
          <p><RiUserFollowFill /> Follow: {profile.followers}</p>
          <p><FaUsers /> Followes: {profile.following}</p>
          <p><IoLocationOutline /> {profile.location}</p>
          <p><AiOutlineMail /> thiagomev@gmail.com</p>
        </ProfileInfo>
      </CardProfileInner>
    </CardProfile>
  );
}