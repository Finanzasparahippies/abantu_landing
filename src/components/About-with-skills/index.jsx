import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";
import Split from "../Split";

const AboutWithSkills = () => {
    React.useEffect(() => {
        heroSkillsProgress();
    }, []);

    const Styles = {
        containerP: {
            padding: "0 20px",
            maxWidth: "1200px",
            margin: "0 auto",
        },
        title: {
            fontSize: "2rem",
            textAlign: "center",
            margin: "20px 0",
        },
        privacyPolicySection: {
            margin: "40px 0",
            fontSize: "1.5rem",
        },
        p: {
            margin: "10px 0",
            fontSize: "1rem",
        },
        h2: {
            fontSize: "1.5rem",
            margin: "20px 0",
            textAlign: "center",
        },
    };

    return (
        <div id="preguntas" className="hero-sec section-padding">
            <div>
                <h1 style={Styles.title}><strong>Preguntas Frecuentes</strong></h1>
                <div style={Styles.containerP}>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>¿Qué es ABANTU?</h2>
                        <p style={Styles.p}>
                            La comunidad ABANTU es una organización social sin
                            fines de lucro que utiliza la tecnología para
                            contribuir a la igualdad, promoviendo el trabajo en
                            equipo, cooperación y lealtad. Por lo que ha
                            desarrollado una plataforma en línea al servicio de
                            sus usuarios que crea un flujo de capital para el
                            beneficio de la comunidad.
                        </p>
                    </div>

                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>¿Cómo envío mi Contribución?</h2>
                        <p style={Styles.p}>
                            Las contribuciones se hacen a través de una
                            transferencia bancaria, depósito en banco o tiendas
                            de autoservicio. Cada usuario puede consultar la
                            cuenta de banco, número de tarjeta y CLABE
                            interbancaria a la que enviará la contribución en su
                            cuenta dentro de la plataforma.
                        </p>
                    </div>

                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                            ¿De cuánto es la contribución que se envía?
                        </h2>
                        <p style={Styles.p}>
                            Cada usuario de la plataforma queda de acuerdo en
                            enviar una contribución de $100, $500 ó $1,000 pesos al
                            mes de acuerdo de la Red de Contribución a la que
                            pertenezca a través de una transferencia bancaria.
                            Es necesario contar con una cuenta de banco para
                            formar parte de la plataforma.
                        </p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                            ¿De cuánto es la contribución que se recibe?
                        </h2>
                        <p style={Styles.p}>
                            Cada usuario en la plataforma recibe contribuciones de
                            $100, $500 ó $1,000 pesos por cada usuario
                            dependiendo de la Red de Contribución en la que esté
                            activo. En la Red de Contribución de $100 pesos se puede
                            recibir hasta $3,000 pesos al mes. En la Red de
                            Contribución de $500 pesos se puede recibir hasta
                            $15,000 pesos al mes. En la Red de Contribución de
                            $1,000 pesos se puede recibir hasta $30,000 pesos al
                            mes. Cada miembro recibe contribuciones desde el primer
                            invitado que se integra en su Red de Contribución. La
                            cantidad total de contribuciones que se reciben aumenta
                            progresivamente conforme su Red de Contribución crece
                            hasta llegar a 30 usuarios.
                        </p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                            ¿Qué pasa si no envío mi contribución?
                        </h2>
                        <p style={Styles.p}>
                            El usuario que no envíe evidencia de su contribución
                            será dado de baja automáticamente de la plataforma.
                            Sin embargo, el usuario tiene hasta 5 días después
                            de la fecha límite para enviar su evidencia la cual
                            será considerada como 'contribución tardía'. Si el
                            usuario acumula 3 contribuciones tardías en un periodo
                            de 12 meses será dado de baja automáticamente de la
                            plataforma.
                        </p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                            ¿Cuándo tengo que enviar mi contribución?
                        </h2>
                        <p style={Styles.p}>
                            La fecha de contribución mensual es el mismo día del mes
                            en que el usuario se da de alta en una Red de
                            Contribución. Las fechas de contribución de cada Red de
                            Contribución ($100, $500, ó $1,000 pesos) pueden ser
                            diferentes.
                        </p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                            ¿Cuál es el procedimiento para validar las
                            contribuciones?
                        </h2>
                        <p style={Styles.p}>
                            Cada usuario es responsable de enviar evidencia de
                            su contribución antes de la fecha límite de contribución en
                            la plataforma. Las evidencias serán visibles en la
                            tabla de validaciones de cada usuario. Los miembros
                            de la comunidad tienen 1 mes para verificar que no
                            exista algún error con la contribución recibida, las
                            evidencias se marcan como válidas automáticamente
                            después de este periodo de tiempo. Si la evidencia
                            no cumple los requisitos, el beneficiario debe
                            marcar la casilla de 'error' en la seccion
                            'Verificar contribuciones recibidas' de su cuenta en la
                            plataforma. Una notificación se le manda al usuario que mandó la evidencia
                            para resolver el problema. Después de tres
                            notificaciones el usuario que no manda sus
                            evidencias correctamente se le da de baja de la
                            plataforma. Si el beneficiario marca como invalida
                            una evidencia que sí cumple con los requisitos, se
                            le manda una notificación al beneficiario. Después
                            de tres notificaciones el beneficiario se le da de
                            baja de la plataforma. La evidencia de contribución
                            pueden ser foto del depósito bancario, foto del
                            ticket de tienda de autoservicio, comprobante
                            emitido por la app del banco, pantallazo de la
                            transferencia en el celular, etc. Sin embargo, una
                            forma más segura de comprobar una transferencia
                            bancaria es a través de la clave de rastreo que
                            emite{" "}
                            <a
                                href="banxico.org.mx"
                                tarjet="_blank"
                                style={{ color: "#000000" }}
                            >
                                banxico.org.mx
                            </a>
                            . La comunidad Abantu promueve usar este método en
                            la medida de lo posible.
                        </p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Cómo agrego miembros a mi Red de Contribución?
                        </h2>
                        <p style={Styles.p}>Cada usuario tiene un código de invitación, el cual puede compartir hasta 4 veces con las personas que quieran unirse a su Red de Contribución. El código es el mismo para las 3 diferentes Redes de Contribución de $100, $500 ó $1,000 pesos.</p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Qué pasa si no agrego nuevos miembros a la Red de Contribución?
                        </h2>
                        <p style={Styles.p}>Nada. La plataforma sólo da de baja a los usuarios que no mandan evidencia o no cumplen con los requisitos de evidencia de su contribución mensual. Hay que tener en mente que el objetivo de la plataforma se logra sólo agregando nuevos miembros a la comunidad.</p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Me puedo dar de alta si no tengo un código de invitación?
                        </h2>
                        <p style={Styles.p}>Sí. A los nuevos usuarios que se unen sin código de invitación se les asigna un código de los usuarios activos en la plataforma. De esta manera se forman las Redes de Contribución en automático sin que los usuarios compartan sus códigos de invitación.</p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Me puedo dar de baja de la plataforma?
                        </h2>
                        <p style={Styles.p}>Sí. Todos los usuarios tienen la opción de darse de baja de la plataforma en cualquier momento. Puede hacer llegar esta petición por medio de un mensaje al correo o whatsapp de ABANTU.</p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Qué pasa si un usuario se da de baja?
                        </h2>
                        <p style={Styles.p}>En caso de que un usuario quede dado de baja de la plataforma, las contribuciones a esa persona se suspenden y la posición queda disponible para que sea ocupada por un nuevo usuario donado por otro miembro de la comunidad. El nuevo usuario se queda con la Red de Contribución que se había formado.</p>
                    </div>
                    <div style={Styles.privacyPolicySection}>
                        <h2 style={Styles.h2}>
                        ¿Qué organismo regula a ABANTU?
                        </h2>
                        <p style={Styles.p}>Las contribuciones son reguladas por el código civil estatal. ABANTU es una comunidad sin fines de lucro, no presta un servicio financiero, tampoco vende un servicio o producto.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWithSkills;
