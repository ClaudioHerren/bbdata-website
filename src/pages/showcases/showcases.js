import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {showcase} from '../../../pages/showcase';
import styles from './styles.module.css';

import Banner from "../../theme/Banner";
import Project from "../../theme/ShowcaseProjects";
import YourProject from "../../theme/ShowcaseYourProject";

import {Container, Row, Col} from "react-bootstrap";

function Showcases() {
    const {bannerShowcase, firstShowcase, secondShowcase, thirdShowcase, fourthShowcase, yourProject} = showcase;
    return (
        <Layout title="Showcases">
            <Container fluid className={styles.ContB}>

                <Row className={styles.RowBanner}>
                    <Col className={styles.Banner}>
                        <Banner title={bannerShowcase.title}
                                text={bannerShowcase.text}
                        />
                    </Col>
                </Row>

                <Row className={styles.Content}>
                    <Container>

                        <Row className={styles.Row}>
                            <Col className={styles.Projects} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Project image={useBaseUrl(firstShowcase.image)}
                                         title={firstShowcase.title}
                                         subtitle={firstShowcase.subtitle}
                                         text={firstShowcase.text}
                                         btnTextShowcase={firstShowcase.btnTextShowcase}
                                         btnLinkShowcase={firstShowcase.btnLinkShowcase}
                                />
                            </Col>

                            <Col className={styles.Projects} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Project image={useBaseUrl(secondShowcase.image)}
                                         title={secondShowcase.title}
                                         subtitle={secondShowcase.subtitle}
                                         text={secondShowcase.text}
                                         btnTextShowcase={secondShowcase.btnTextShowcase}
                                         btnLinkShowcase={secondShowcase.btnLinkShowcase}
                                />
                            </Col>
                        </Row>
                        <Row className={styles.Row}>
                            <Col className={styles.Projects} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Project image={useBaseUrl(thirdShowcase.image)}
                                         title={thirdShowcase.title}
                                         subtitle={thirdShowcase.subtitle}
                                         text={thirdShowcase.text}
                                         btnTextShowcase={thirdShowcase.btnTextShowcase}
                                         btnLinkShowcase={thirdShowcase.btnLinkShowcase}
                                />
                            </Col>

                            <Col className={styles.Projects} xl={6} lg={6} md={6} sm={12} xs={12}>
                                <Project image={useBaseUrl(fourthShowcase.image)}
                                         title={fourthShowcase.title}
                                         subtitle={fourthShowcase.subtitle}
                                         text={fourthShowcase.text}
                                         btnTextShowcase={fourthShowcase.btnTextShowcase}
                                         btnLinkShowcase={fourthShowcase.btnLinkShowcase}
                                />
                            </Col>
                        </Row>

                        <Row className={styles.Contact}>
                            <YourProject title={yourProject.title}
                                         text={yourProject.text}
                                         btnTextPrimaryViolet={yourProject.btnTextPrimaryViolet}
                                         linkPrimaryViolet={yourProject.linkPrimaryViolet}
                                         btnTextSecondaryWhite={yourProject.btnTextSecondaryWhite}
                                         linkSecondaryWhite={yourProject.linkSecondaryWhite}
                            />
                        </Row>

                    </Container>
                </Row>

            </Container>
        </Layout>
    );
}

export default Showcases;
