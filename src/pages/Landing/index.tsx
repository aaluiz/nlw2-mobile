import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasseIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);
    const { navigate } = useNavigation();
    useEffect(() => {
        api.get('connections').then((resp) => {
            const { total } = resp.data;

            setTotalConnections(total);
        })

    }, []);

    function handleNavigateToGiveClassesPage() {
        navigate('GivingClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que você deseja?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudyPages}
                    >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClasseIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnection}>
                Total de {totalConnections} conexões realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;
