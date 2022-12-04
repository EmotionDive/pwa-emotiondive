import React from "react";
import { ActivitiesLocalizationBar } from '../../../../components/LocalizationBar'
import {
	LargeButtonModal,
	ModalAction,
	ModalProvider,
} from '../../../../components/Modal'
import { Select, TextArea } from '../../../../components/Forms'
import data from "./data/Whatwouldyoudo.json"
import { useState } from "react";

const WhatWouldYouDoActivity=() => {
    return (
    <div className='SelfEfficacyActivity'>
    <ModalProvider>
        <ActivitiesLocalizationBar title={data.title} variant='SelfEfficacy' />
        <main className='successesAndFailuresActivity'>
            <div className='questions'>
                <p className='systemText__instruction'>{data.instructions}</p>
                <div className='formContainer'>
                    <p>{data.scenario[0].situation}</p>
                    <TextArea
                        label='En el siguiente cuadro, describe ¿Cómo solucionarias la situación que se te presento?'
                        placeholder='Desarrolla tu solución en este recuadro ...'
                        rows={4}
                    />
                    <LargeButtonModal
                        title={'Concluiste la actividad, Felicidades!!'}
                        variant='confirmation'
                        buttonLabels={['Okey']}
                        exitOnClickOut={false}
                        onConfirmationCallback={() => {
                            console.log('Finish')
                        }}
                    >
                        Terminar
                    </LargeButtonModal>
                </div>
            </div>
        </main>
        <ModalAction />
    </ModalProvider>
</div>
)
}

export default WhatWouldYouDoActivity