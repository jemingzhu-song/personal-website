import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import SkillsBackground from '../assets/skills_background.png';
import JavaLogo from '../assets/logos/java.png';
import KotlinLogo from '../assets/logos/kotlin.png';
import JavaScriptLogo from '../assets/logos/javascript.png';
import TypeScriptLogo from '../assets/logos/typescript.svg';
import PythonLogo from '../assets/logos/python.png';
import HTMLLogo from '../assets/logos/html.png';
import CSSLogo from '../assets/logos/css.png';
import CLogo from '../assets/logos/c.png';
import SQLLogo from '../assets/logos/sql.png';
import CPPLogo from '../assets/logos/c++.png';
import SpringLogo from '../assets/logos/spring.png';
import SpringBootLogo from '../assets/logos/springboot.png';
import JUnitLogo from '../assets/logos/junit.png';
import JavaSwingLogo from '../assets/logos/javaswing.png';
import MockitoLogo from '../assets/logos/mockito.png';
import ReactLogo from '../assets/logos/react.png';
import EnzymeLogo from '../assets/logos/enzyme.png';
import JestLogo from '../assets/logos/jest.png';
import RTLLogo from '../assets/logos/rtl.png';
import GitLogo from '../assets/logos/git.png';
import DockerLogo from '../assets/logos/docker.png';
import AWSLogo from '../assets/logos/aws.png';
import KubernetesLogo from '../assets/logos/kubernetes.png';
import OpenshiftLogo from '../assets/logos/openshift.png';
import SignalFXLogo from '../assets/logos/signalfx.png';
import SplunkLogo from '../assets/logos/splunk.png';
import LaunchDarklyLogo from '../assets/logos/launchdarkly.png';
import BambooLogo from '../assets/logos/bamboo.png';
import JiraLogo from '../assets/logos/jira.png';
import ConfluenceLogo from '../assets/logos/confluence.png';
import BitbucketLogo from '../assets/logos/bitbucket.png';
import GitHubLogo from '../assets/logos/github.png';
import GitLabLogo from '../assets/logos/gitlab.png';
import TrelloLogo from '../assets/logos/trello.png';
import AzureDevopsLogo from '../assets/logos/azuredevops.png';
import MicrosoftLogo from '../assets/logos/microsoft.svg';
import FigmaLogo from '../assets/logos/figma.png';
import PhotoshopLogo from '../assets/logos/photoshop.png';
import NotionLogo from '../assets/logos/notion.png';

type SkillsAndQualificationsPageProps = {
  homePageAudio: HTMLAudioElement;
};

function SkillsAndQualificationsPage({ homePageAudio }: SkillsAndQualificationsPageProps) {
  useEffect(() => {
    homePageAudio.load();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ marginTop: '80px', display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{ fontSize: '50px', marginTop: '30px', position: 'absolute' }}
          variant='h1'
          color='secondary'
        >
          Skills & Qualifications
        </Typography>
        <img src={SkillsBackground} style={{ width: '100vw', height: '35vh', objectFit: 'cover' }}></img>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ marginTop: '40px' }} variant='h4'>
          Education
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            University of New South Wales
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            2019 - 2023
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Bachelor of Commerce & Bachelor of Computer Science
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            North Sydney Boys High School
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            2013 - 2018
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Higher School Certificate (HSC)
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ marginTop: '40px' }} variant='h4'>
          Qualifications
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', minWidth: '400px' }}>
          <Typography sx={{ margin: '3px 0px' }} variant='body2'>
            AWS Certified Cloud Practitioner
          </Typography>
          <Typography sx={{ margin: '3px 0px', fontStyle: 'italic' }} variant='body1'>
            2022 - 2015 (Valid Until)
          </Typography>
          <Typography sx={{ margin: '3px 0px' }} variant='body1'>
            Amazon Web Services
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ marginTop: '40px' }} variant='h4'>
          Technology Stack
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            minWidth: '400px',
          }}
        >
          <Typography sx={{ color: '#939393', margin: '3px 0px' }} variant='subtitle2'>
            PROGRAMMING LANGUAGES
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JavaLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Java
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={KotlinLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Kotlin
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JavaScriptLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                JavaScript
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={TypeScriptLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                TypeScript
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={PythonLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Python
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={HTMLLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                HTML
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={CSSLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                CSS
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={SQLLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                SQL
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: '20px',
            minWidth: '400px',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ height: '20px' }} src={CPPLogo} />
            <Typography variant='body1' sx={{ margin: '0px 10px' }}>
              C++
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ height: '20px' }} src={CLogo} />
            <Typography variant='body1' sx={{ margin: '0px 10px' }}>
              C
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            minWidth: '400px',
          }}
        >
          <Typography sx={{ color: '#939393', margin: '3px 0px' }} variant='subtitle2'>
            FRAMEWORKS & LIBRARIES
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={SpringLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Spring
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={SpringBootLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Spring Boot
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={MockitoLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Mockito
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JUnitLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                JUnit
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JavaSwingLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Java Swing
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={ReactLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                React
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={EnzymeLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Enzyme
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JestLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Jest
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={RTLLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                React Testing Library
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            minWidth: '400px',
          }}
        >
          <Typography sx={{ color: '#939393', margin: '3px 0px' }} variant='subtitle2'>
            DEVOPS
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={GitLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Git
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={DockerLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Docker
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={KubernetesLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Kubernetes
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={OpenshiftLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Openshift
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={AWSLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                AWS
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={SignalFXLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                SignalFX
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={SplunkLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Splunk
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={BambooLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Bamboo
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={LaunchDarklyLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                LaunchDarkly
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            minWidth: '400px',
          }}
        >
          <Typography sx={{ color: '#939393', margin: '3px 0px' }} variant='subtitle2'>
            TOOLS & TECHNOLOGIES
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={JiraLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Jira
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={ConfluenceLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Confluence
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={BitbucketLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Bitbucket
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={GitHubLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                GitHub
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={GitLabLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                GitLab
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={TrelloLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Trello
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={MicrosoftLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Office 365
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={NotionLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Notion
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: '20px',
              minWidth: '400px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={AzureDevopsLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Azure DevOps
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={FigmaLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Figma
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <img style={{ height: '20px' }} src={PhotoshopLogo} />
              <Typography variant='body1' sx={{ margin: '0px 10px' }}>
                Photoshop
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: '40px' }}></Box>
    </Box>
  );
}

export default SkillsAndQualificationsPage;
