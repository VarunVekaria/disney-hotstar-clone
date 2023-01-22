import React from "react";
import styled from "styled-components";
// import ss from "/images/login-background.jpg";
const Login = (props) => {
	return (
		<Container>
			<Content>
				<CTA>
					<CTALogoOne src="/images/Disney+_Hotstar_logo.svg.png" />
					<SignUp>GET IT ALL HERE</SignUp>
					<Description>
						Disney+ Hotstar is an online video streaming platform owned by Novi
						Digital Entertainment Private Limited, a wholly owned subsidiary of
						Star India Private Limited. Disney+ Hotstar currently offers over
						100,000 hours of TV content and movies across 9 languages, and every
						major sport covered live.
					</Description>
					<CTALogoTwo src = '/images/cta-logo-two.png' />
				</CTA>
				<BgImage />
			</Content>
		</Container>
		// <div>HElllo</div>
	);
};
const Container = styled.section`
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-align: center;
	min-height: 100vh;
`;

const Content = styled.div`
	margin-bottom: 10vw;
	width: 100%;
	position: relative;
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 80px, 40px;
	height: 100%;
`;

const BgImage = styled.div`
	height: 100%;
	background-position: top;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: url("/images/login-background.jpg");
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -11;
`;

const CTA = styled.div`
	margin-bottom: 2vw;
	max-width: 500px;
	flex-wrap: wrap;
	display: flex;
	flex-direction: column;
	margin-top: 0;
	align-items: center;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	width: 100%;
`;
const CTALogoOne = styled.img`
	max-width: 600px;
	min-height: 1px;
	display: block;
	width: 100%;
	margin-bottom: 12px;
`;

const SignUp = styled.a`
	font-weight: bold;
	color: #f9f9f9;
	background-color: #0063e5;
	width: 100%;
	font-size: 18px;
	border: 1px solid transparent;
	padding: 16.5px 0;
	border-radius: 4px;

	&:hover {
		background-color: #0483ee;
	}
`;
const Description = styled.p`
	color: hsla(0, 0%, 95.3%, 1);
	font-size: 14px;
	margin: 0 24px;
	padding-top: 12px;
	line-height: 1.5;
	letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 500px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%
`;
export default Login;
