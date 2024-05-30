'use client';

import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    BiHardHat, BiPaintRoll, BiNote, BiBulb, BiLayer, BiOutline
} from 'react-icons/bi'


const howItWorksContent = {
    heading: {
        title: 'Where creativity meets structural integrity',
        subTitle: 'How it works',
        description: 'At arc view we are committed to transcending mere structures'
    },

    steps: [
        {
            number: '01',
            icon: BiHardHat,
            title: 'Initiation',
            description: 'Here is were we start gathering all of the ingredients needed to create the perfect product',
            btn: {
                href: '/works',
                label: 'Learn More'
            }
        },
        {
            number: '02',
            icon: BiPaintRoll,
            title: 'Conceptual design',
            description: 'A wireframe of the final product is produced',
            btn: {
                href: '/works',
                label: 'Learn More'
            }
        },
        {
            number: '03',
            icon: BiNote,
            title: 'Construction',
            description: 'Here is were we start gathering all of the ingredients needed to create the perfect product',
            btn: {
                href: '/works',
                label: 'Learn More'
            }
        },
    ],
    features: [
        {
            icon: BiHardHat,
            title: 'Where creativity meets structural integrity',
            subTitle: 'How it works',
            description: 'At arc view we are committed to transcending mere structures'
            , btn: {
                href: '/works'
                , label: 'Learn More'

            }
        },
    ]

}

const HowItWorks = ({ className }) => {
    return (
        <section className={className}>

        </section>
    )
}

export default HowItWorks