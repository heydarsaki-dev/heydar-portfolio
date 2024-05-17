'use client'

import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useCallback } from 'react'

const ParticlesContainer = () => {

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {

  }, [])

  return <Particles
    className='w-full h-full absolute translate-z-0 '
    id='tsparticles' init={particlesInit} loaded={particlesLoaded}
    options={{
      fullScreen: {
        enable: false
      },
      background: {
        color: {
          value: ''
        },

      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onclick: {
            enable: false,
            mode: 'push'
          },
          onhover: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 5
          },
          repulse: {
            distance: 50,
            duration: 2
          }
        }
      },
      particles: {
        color: {
          value: '$68e2e'
        },
        links: {
          color: '#f5d393',
          distance: 150,
          enable: true,
          opacity: 0.05,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 200
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: false
    }
    } />
};

export default ParticlesContainer;
