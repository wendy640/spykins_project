import React from 'react'
import { Articles, Footer, Header, Services, Wrapper } from './A_ProsposStyle'
import logo from './assets/logo.png'
import pen from './assets/pen.png'
import house from './assets/bg-houses.png'

const Aprospos = () => {
	return (
		<Wrapper>
			<Header>
				<img class="pen" src={pen} alt="pen" />
				<div class="header">
					<h3>NOUS VALOSRISONS LA</h3>
					<h1>
						CLARTÉ<span>&gt;</span>
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est
						enim, porta nec cursus malesuada, semper tincidunt dolor.
						Suspendisse potenti. Vivamus vitae pulvinar orci. Donec enim sem,
						sagittis eget purus sed, rhoncus condimentum sem. Donec sagittis
						sapien a turpis imperdiet hendrerit.
					</p>
					<button type="submit">En savior plus</button>
				</div>
				<img src={house} alt="house bg" />
			</Header>

			<Services>
				<div class="service">
					<p>NOS</p>
					<h1>SERVICES</h1>
				</div>
				<div class="row">
					<div class="column" style={{ backgroundColor: '#1e3a75' }}>
						<h2>
							COMPROPRIÉTÉ <span>&gt;</span>
						</h2>
					</div>
					<div
						class="column"
						style={{ backgroundColor: '#783d02', lineHeight: '25px' }}
					>
						<h2>
							PLANIFICATION <br></br>FAMILIALE <span>&gt;</span>
						</h2>
					</div>
					<div class="column" style={{ backgroundColor: '#802405' }}>
						<h2>
							IMMOBILIER <span>&gt;</span>
						</h2>
					</div>
				</div>
			</Services>

			<Articles>
				<div class="article">
					<p>LES</p>
					<h1>ARTICLES</h1>
					<div class="row">
						<div class="column">
							<h6 class="strong">
								<strong>Titre de l'article</strong>
							</h6>
							<h6 class="title">
								18 mars 2021 •<u> Immobilier</u>
							</h6>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								est enim, porta nec cursus malesuada, semper tincidunt dolor.
							</p>
						</div>
						<div class="column">
							<h6 class="strong">
								<strong>Titre de l'article</strong>
							</h6>
							<h6 class="title">
								18 mars 2021 •<u> Immobilier</u>
							</h6>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								est enim, porta nec cursus malesuada, semper tincidunt dolor.
							</p>
						</div>
						<div class="column">
							<h6 class="strong">
								<strong>Titre de l'article</strong>
							</h6>
							<h6 class="title">
								18 mars 2021 •<u> Immobilier</u>
							</h6>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								est enim, porta nec cursus malesuada, semper tincidunt dolor.
							</p>
						</div>
						<div class="column">
							<h6 class="strong">
								<strong>Titre de l'article</strong>
							</h6>
							<h6 class="title">
								18 mars 2021 •<u> Immobilier</u>
							</h6>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
								est enim, porta nec cursus malesuada, semper tincidunt dolor.
							</p>
						</div>
					</div>
				</div>
			</Articles>
			<Footer>
				<img src={logo} alt="logo" /> <p class="logo">BARBE & CIMON NOTAIRES</p>
				<div class="row">
					<div class="column">
						<h6>
							<strong>BUREAU</strong>
						</h6>
						<p>
							101 BOULEVARD<br></br> SAINT JOSEPH O. MONTREAL,QC <br></br>H2T
							2P7
						</p>
						<h6>
							<strong>NOUS SUIVRE</strong>
						</h6>
					</div>
					<div class="column">
						{' '}
						<ul>
							<li>A PROSPOS</li>
							<li>NOS SERVICES</li>
							<li>ARTICLES</li>
							<li>CONTACT</li>
						</ul>
					</div>
				</div>
			</Footer>
		</Wrapper>
	)
}

export default Aprospos
