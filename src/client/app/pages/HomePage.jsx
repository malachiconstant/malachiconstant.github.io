import React from 'react';
import {render} from 'react-dom';
import {Link, IndexLink} from 'react-router';
import '../sass/GenericPage.scss';
import '../sass/HomePage.scss';
import TextShadow from "../components/TextShadow.jsx";


class HomePage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentWillMount() {
		
	}
	render() {
		return(
			<div ref="genericPage" className="generic-page home-page ">
			<h2>Good {this.props.time}!</h2>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<h2>hiiiii</h2>
						<p>Welcome to my site.  Most of everything you see here has been designed and developed by yours truly.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<h2>hello</h2>
						<p>this is the other paragraph</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<TextShadow>
						<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh venmo microdosing umami polaroid la croix biodiesel portland four dollar toast letterpress. Affogato forage jianbing hell of XOXO coloring book chia chicharrones fingerstache. Crucifix lyft pabst fam taxidermy, bicycle rights af man braid mlkshk kale chips. Unicorn pabst sriracha, iceland la croix biodiesel schlitz chia kogi pop-up sustainable forage. Banjo gastropub ennui occupy before they sold out pop-up, vinyl 3 wolf moon farm-to-table yr seitan lyft put a bird on it health goth. Gastropub offal meh forage hot chicken kombucha. Ugh freegan fashion axe actually. Kinfolk street art mumblecore pabst pug post-ironic. Brooklyn XOXO banh mi cornhole wolf. Hammock pug plaid freegan narwhal. Air plant keffiyeh freegan cliche neutra tattooed readymade lumbersexual shaman kickstarter. Beard lyft crucifix fanny pack, flexitarian hexagon gentrify cornhole. Chicharrones banh mi pitchfork pour-over, enamel pin cold-pressed marfa pok pok lomo ugh vexillologist next level man braid skateboard four dollar toast.</p>

<p>Butcher kitsch adaptogen lyft letterpress la croix fam pabst, you probably haven't heard of them microdosing. Health goth PBR&B pabst freegan fingerstache disrupt craft beer echo park leggings hoodie kinfolk retro pinterest selfies chillwave. Kale chips authentic af umami schlitz normcore humblebrag swag. Synth green juice cloud bread adaptogen, pug sartorial live-edge glossier. 90's post-ironic whatever man bun marfa intelligentsia etsy kinfolk cornhole stumptown next level tousled art party retro. Echo park yr williamsburg, tote bag hashtag salvia fashion axe tumeric bushwick activated charcoal lyft woke kombucha. Sustainable master cleanse chambray, put a bird on it hoodie cold-pressed venmo. Messenger bag vaporware next level tofu narwhal crucifix godard edison bulb yuccie aesthetic four loko woke hella skateboard knausgaard. Food truck keffiyeh kale chips, VHS pop-up unicorn meh cray cred pok pok. Schlitz yuccie enamel pin marfa small batch hoodie, taiyaki photo booth snackwave pop-up dreamcatcher wolf chicharrones kickstarter slow-carb. Lyft retro next level, street art microdosing hashtag shoreditch sartorial pok pok la croix.</p>

<p>Tote bag VHS slow-carb yuccie pop-up cred fam single-origin coffee. You probably haven't heard of them adaptogen keffiyeh truffaut. Gentrify waistcoat hoodie bitters fanny pack umami try-hard. Enamel pin portland edison bulb normcore butcher, humblebrag four loko meggings kogi skateboard literally fanny pack. Yr flexitarian gluten-free knausgaard man bun taxidermy, literally artisan godard dreamcatcher shabby chic. Snackwave meggings offal, biodiesel poke kogi normcore fingerstache kale chips gastropub migas. Mlkshk af forage, 3 wolf moon selvage activated charcoal chartreuse you probably haven't heard of them distillery portland. Direct trade knausgaard bitters ennui you probably haven't heard of them cornhole enamel pin irony activated charcoal migas typewriter lomo church-key drinking vinegar. Squid kale chips put a bird on it, mumblecore flexitarian neutra prism. Salvia yr hexagon letterpress pork belly, pabst literally mumblecore. Authentic crucifix celiac blue bottle, aesthetic gluten-free retro waistcoat coloring book lumbersexual locavore gochujang. Gochujang kickstarter deep v, tilde artisan brooklyn schlitz. Schlitz four dollar toast chambray post-ironic, gastropub iPhone cornhole poutine viral activated charcoal truffaut lumbersexual tumeric. Hell of iceland taxidermy, fingerstache copper mug kitsch try-hard disrupt bushwick hammock. VHS blue bottle sriracha, live-edge pork belly fam 8-bit franzen prism freegan mustache.</p>

<p>Next level lumbersexual scenester, hammock ennui XOXO knausgaard chillwave vegan. Cred +1 artisan, live-edge hammock snackwave kinfolk vape. Roof party palo santo migas sustainable man braid locavore. Franzen umami chambray mustache cray 8-bit. You probably haven't heard of them pork belly scenester, whatever vice health goth iPhone four dollar toast fashion axe live-edge gluten-free. Tumblr viral vice meggings mumblecore cray irony yr vaporware normcore vexillologist you probably haven't heard of them four loko keffiyeh portland. Heirloom you probably haven't heard of them knausgaard dreamcatcher. Poke microdosing celiac fam adaptogen fingerstache, salvia irony echo park art party tilde hashtag. Pop-up cornhole cardigan, readymade organic shaman photo booth craft beer mumblecore prism. You probably haven't heard of them offal cliche, pour-over edison bulb tousled pabst bushwick bespoke mumblecore chartreuse shabby chic activated charcoal VHS af. Twee jean shorts vaporware, yr flexitarian master cleanse mumblecore cardigan man braid. Plaid chicharrones yr fam. Yuccie kombucha affogato fingerstache ethical gentrify dreamcatcher chartreuse, hammock bespoke authentic wolf kitsch cliche. Art party lyft hexagon, subway tile selvage raw denim wolf tumblr intelligentsia pok pok vice authentic venmo godard franzen. Pug try-hard deep v adaptogen forage ethical gentrify brunch selvage.</p>

<p>Salvia kitsch normcore, banh mi woke beard post-ironic raclette. Unicorn craft beer quinoa fam, gastropub bespoke roof party pork belly pitchfork la croix air plant wolf occupy iceland whatever. 3 wolf moon helvetica craft beer, mumblecore readymade la croix lomo gochujang. Marfa literally meditation +1 art party brooklyn. Gluten-free humblebrag gentrify 90's affogato vice. 3 wolf moon adaptogen hashtag jean shorts viral distillery cray wolf. Venmo af man braid, la croix +1 iceland intelligentsia flexitarian slow-carb. Organic before they sold out hammock letterpress. Ethical cronut cold-pressed neutra organic microdosing. Cloud bread lomo woke kickstarter fixie church-key salvia chambray cornhole messenger bag ennui blog. Meditation la croix kale chips selfies shabby chic skateboard lomo paleo bespoke. Biodiesel neutra pop-up photo booth you probably haven't heard of them. Tattooed fixie sriracha, gastropub chillwave adaptogen gluten-free raw denim deep v lyft iPhone banjo cardigan poke. Kitsch salvia chillwave tousled leggings ethical messenger bag vaporware iPhone.</p>
					</TextShadow>
				</div>
				<div style={{width :100+ "%"}}>
					<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh venmo microdosing umami polaroid la croix biodiesel portland four dollar toast letterpress. Affogato forage jianbing hell of XOXO coloring book chia chicharrones fingerstache. Crucifix lyft pabst fam taxidermy, bicycle rights af man braid mlkshk kale chips. Unicorn pabst sriracha, iceland la croix biodiesel schlitz chia kogi pop-up sustainable forage. Banjo gastropub ennui occupy before they sold out pop-up, vinyl 3 wolf moon farm-to-table yr seitan lyft put a bird on it health goth. Gastropub offal meh forage hot chicken kombucha. Ugh freegan fashion axe actually. Kinfolk street art mumblecore pabst pug post-ironic. Brooklyn XOXO banh mi cornhole wolf. Hammock pug plaid freegan narwhal. Air plant keffiyeh freegan cliche neutra tattooed readymade lumbersexual shaman kickstarter. Beard lyft crucifix fanny pack, flexitarian hexagon gentrify cornhole. Chicharrones banh mi pitchfork pour-over, enamel pin cold-pressed marfa pok pok lomo ugh vexillologist next level man braid skateboard four dollar toast.

Butcher kitsch adaptogen lyft letterpress la croix fam pabst, you probably haven't heard of them microdosing. Health goth PBR&B pabst freegan fingerstache disrupt craft beer echo park leggings hoodie kinfolk retro pinterest selfies chillwave. Kale chips authentic af umami schlitz normcore humblebrag swag. Synth green juice cloud bread adaptogen, pug sartorial live-edge glossier. 90's post-ironic whatever man bun marfa intelligentsia etsy kinfolk cornhole stumptown next level tousled art party retro. Echo park yr williamsburg, tote bag hashtag salvia fashion axe tumeric bushwick activated charcoal lyft woke kombucha. Sustainable master cleanse chambray, put a bird on it hoodie cold-pressed venmo. Messenger bag vaporware next level tofu narwhal crucifix godard edison bulb yuccie aesthetic four loko woke hella skateboard knausgaard. Food truck keffiyeh kale chips, VHS pop-up unicorn meh cray cred pok pok. Schlitz yuccie enamel pin marfa small batch hoodie, taiyaki photo booth snackwave pop-up dreamcatcher wolf chicharrones kickstarter slow-carb. Lyft retro next level, street art microdosing hashtag shoreditch sartorial pok pok la croix.

Tote bag VHS slow-carb yuccie pop-up cred fam single-origin coffee. You probably haven't heard of them adaptogen keffiyeh truffaut. Gentrify waistcoat hoodie bitters fanny pack umami try-hard. Enamel pin portland edison bulb normcore butcher, humblebrag four loko meggings kogi skateboard literally fanny pack. Yr flexitarian gluten-free knausgaard man bun taxidermy, literally artisan godard dreamcatcher shabby chic. Snackwave meggings offal, biodiesel poke kogi normcore fingerstache kale chips gastropub migas. Mlkshk af forage, 3 wolf moon selvage activated charcoal chartreuse you probably haven't heard of them distillery portland. Direct trade knausgaard bitters ennui you probably haven't heard of them cornhole enamel pin irony activated charcoal migas typewriter lomo church-key drinking vinegar. Squid kale chips put a bird on it, mumblecore flexitarian neutra prism. Salvia yr hexagon letterpress pork belly, pabst literally mumblecore. Authentic crucifix celiac blue bottle, aesthetic gluten-free retro waistcoat coloring book lumbersexual locavore gochujang. Gochujang kickstarter deep v, tilde artisan brooklyn schlitz. Schlitz four dollar toast chambray post-ironic, gastropub iPhone cornhole poutine viral activated charcoal truffaut lumbersexual tumeric. Hell of iceland taxidermy, fingerstache copper mug kitsch try-hard disrupt bushwick hammock. VHS blue bottle sriracha, live-edge pork belly fam 8-bit franzen prism freegan mustache.

Next level lumbersexual scenester, hammock ennui XOXO knausgaard chillwave vegan. Cred +1 artisan, live-edge hammock snackwave kinfolk vape. Roof party palo santo migas sustainable man braid locavore. Franzen umami chambray mustache cray 8-bit. You probably haven't heard of them pork belly scenester, whatever vice health goth iPhone four dollar toast fashion axe live-edge gluten-free. Tumblr viral vice meggings mumblecore cray irony yr vaporware normcore vexillologist you probably haven't heard of them four loko keffiyeh portland. Heirloom you probably haven't heard of them knausgaard dreamcatcher. Poke microdosing celiac fam adaptogen fingerstache, salvia irony echo park art party tilde hashtag. Pop-up cornhole cardigan, readymade organic shaman photo booth craft beer mumblecore prism. You probably haven't heard of them offal cliche, pour-over edison bulb tousled pabst bushwick bespoke mumblecore chartreuse shabby chic activated charcoal VHS af. Twee jean shorts vaporware, yr flexitarian master cleanse mumblecore cardigan man braid. Plaid chicharrones yr fam. Yuccie kombucha affogato fingerstache ethical gentrify dreamcatcher chartreuse, hammock bespoke authentic wolf kitsch cliche. Art party lyft hexagon, subway tile selvage raw denim wolf tumblr intelligentsia pok pok vice authentic venmo godard franzen. Pug try-hard deep v adaptogen forage ethical gentrify brunch selvage.

Salvia kitsch normcore, banh mi woke beard post-ironic raclette. Unicorn craft beer quinoa fam, gastropub bespoke roof party pork belly pitchfork la croix air plant wolf occupy iceland whatever. 3 wolf moon helvetica craft beer, mumblecore readymade la croix lomo gochujang. Marfa literally meditation +1 art party brooklyn. Gluten-free humblebrag gentrify 90's affogato vice. 3 wolf moon adaptogen hashtag jean shorts viral distillery cray wolf. Venmo af man braid, la croix +1 iceland intelligentsia flexitarian slow-carb. Organic before they sold out hammock letterpress. Ethical cronut cold-pressed neutra organic microdosing. Cloud bread lomo woke kickstarter fixie church-key salvia chambray cornhole messenger bag ennui blog. Meditation la croix kale chips selfies shabby chic skateboard lomo paleo bespoke. Biodiesel neutra pop-up photo booth you probably haven't heard of them. Tattooed fixie sriracha, gastropub chillwave adaptogen gluten-free raw denim deep v lyft iPhone banjo cardigan poke. Kitsch salvia chillwave tousled leggings ethical messenger bag vaporware iPhone.</p>
				</div>
				<div style={{width :100+ "%"}}>
					<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh venmo microdosing umami polaroid la croix biodiesel portland four dollar toast letterpress. Affogato forage jianbing hell of XOXO coloring book chia chicharrones fingerstache. Crucifix lyft pabst fam taxidermy, bicycle rights af man braid mlkshk kale chips. Unicorn pabst sriracha, iceland la croix biodiesel schlitz chia kogi pop-up sustainable forage. Banjo gastropub ennui occupy before they sold out pop-up, vinyl 3 wolf moon farm-to-table yr seitan lyft put a bird on it health goth. Gastropub offal meh forage hot chicken kombucha. Ugh freegan fashion axe actually. Kinfolk street art mumblecore pabst pug post-ironic. Brooklyn XOXO banh mi cornhole wolf. Hammock pug plaid freegan narwhal. Air plant keffiyeh freegan cliche neutra tattooed readymade lumbersexual shaman kickstarter. Beard lyft crucifix fanny pack, flexitarian hexagon gentrify cornhole. Chicharrones banh mi pitchfork pour-over, enamel pin cold-pressed marfa pok pok lomo ugh vexillologist next level man braid skateboard four dollar toast.

Butcher kitsch adaptogen lyft letterpress la croix fam pabst, you probably haven't heard of them microdosing. Health goth PBR&B pabst freegan fingerstache disrupt craft beer echo park leggings hoodie kinfolk retro pinterest selfies chillwave. Kale chips authentic af umami schlitz normcore humblebrag swag. Synth green juice cloud bread adaptogen, pug sartorial live-edge glossier. 90's post-ironic whatever man bun marfa intelligentsia etsy kinfolk cornhole stumptown next level tousled art party retro. Echo park yr williamsburg, tote bag hashtag salvia fashion axe tumeric bushwick activated charcoal lyft woke kombucha. Sustainable master cleanse chambray, put a bird on it hoodie cold-pressed venmo. Messenger bag vaporware next level tofu narwhal crucifix godard edison bulb yuccie aesthetic four loko woke hella skateboard knausgaard. Food truck keffiyeh kale chips, VHS pop-up unicorn meh cray cred pok pok. Schlitz yuccie enamel pin marfa small batch hoodie, taiyaki photo booth snackwave pop-up dreamcatcher wolf chicharrones kickstarter slow-carb. Lyft retro next level, street art microdosing hashtag shoreditch sartorial pok pok la croix.

Tote bag VHS slow-carb yuccie pop-up cred fam single-origin coffee. You probably haven't heard of them adaptogen keffiyeh truffaut. Gentrify waistcoat hoodie bitters fanny pack umami try-hard. Enamel pin portland edison bulb normcore butcher, humblebrag four loko meggings kogi skateboard literally fanny pack. Yr flexitarian gluten-free knausgaard man bun taxidermy, literally artisan godard dreamcatcher shabby chic. Snackwave meggings offal, biodiesel poke kogi normcore fingerstache kale chips gastropub migas. Mlkshk af forage, 3 wolf moon selvage activated charcoal chartreuse you probably haven't heard of them distillery portland. Direct trade knausgaard bitters ennui you probably haven't heard of them cornhole enamel pin irony activated charcoal migas typewriter lomo church-key drinking vinegar. Squid kale chips put a bird on it, mumblecore flexitarian neutra prism. Salvia yr hexagon letterpress pork belly, pabst literally mumblecore. Authentic crucifix celiac blue bottle, aesthetic gluten-free retro waistcoat coloring book lumbersexual locavore gochujang. Gochujang kickstarter deep v, tilde artisan brooklyn schlitz. Schlitz four dollar toast chambray post-ironic, gastropub iPhone cornhole poutine viral activated charcoal truffaut lumbersexual tumeric. Hell of iceland taxidermy, fingerstache copper mug kitsch try-hard disrupt bushwick hammock. VHS blue bottle sriracha, live-edge pork belly fam 8-bit franzen prism freegan mustache.

Next level lumbersexual scenester, hammock ennui XOXO knausgaard chillwave vegan. Cred +1 artisan, live-edge hammock snackwave kinfolk vape. Roof party palo santo migas sustainable man braid locavore. Franzen umami chambray mustache cray 8-bit. You probably haven't heard of them pork belly scenester, whatever vice health goth iPhone four dollar toast fashion axe live-edge gluten-free. Tumblr viral vice meggings mumblecore cray irony yr vaporware normcore vexillologist you probably haven't heard of them four loko keffiyeh portland. Heirloom you probably haven't heard of them knausgaard dreamcatcher. Poke microdosing celiac fam adaptogen fingerstache, salvia irony echo park art party tilde hashtag. Pop-up cornhole cardigan, readymade organic shaman photo booth craft beer mumblecore prism. You probably haven't heard of them offal cliche, pour-over edison bulb tousled pabst bushwick bespoke mumblecore chartreuse shabby chic activated charcoal VHS af. Twee jean shorts vaporware, yr flexitarian master cleanse mumblecore cardigan man braid. Plaid chicharrones yr fam. Yuccie kombucha affogato fingerstache ethical gentrify dreamcatcher chartreuse, hammock bespoke authentic wolf kitsch cliche. Art party lyft hexagon, subway tile selvage raw denim wolf tumblr intelligentsia pok pok vice authentic venmo godard franzen. Pug try-hard deep v adaptogen forage ethical gentrify brunch selvage.

Salvia kitsch normcore, banh mi woke beard post-ironic raclette. Unicorn craft beer quinoa fam, gastropub bespoke roof party pork belly pitchfork la croix air plant wolf occupy iceland whatever. 3 wolf moon helvetica craft beer, mumblecore readymade la croix lomo gochujang. Marfa literally meditation +1 art party brooklyn. Gluten-free humblebrag gentrify 90's affogato vice. 3 wolf moon adaptogen hashtag jean shorts viral distillery cray wolf. Venmo af man braid, la croix +1 iceland intelligentsia flexitarian slow-carb. Organic before they sold out hammock letterpress. Ethical cronut cold-pressed neutra organic microdosing. Cloud bread lomo woke kickstarter fixie church-key salvia chambray cornhole messenger bag ennui blog. Meditation la croix kale chips selfies shabby chic skateboard lomo paleo bespoke. Biodiesel neutra pop-up photo booth you probably haven't heard of them. Tattooed fixie sriracha, gastropub chillwave adaptogen gluten-free raw denim deep v lyft iPhone banjo cardigan poke. Kitsch salvia chillwave tousled leggings ethical messenger bag vaporware iPhone.</p>
				</div>
				<div style={{width :100+ "%"}}>
					<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh venmo microdosing umami polaroid la croix biodiesel portland four dollar toast letterpress. Affogato forage jianbing hell of XOXO coloring book chia chicharrones fingerstache. Crucifix lyft pabst fam taxidermy, bicycle rights af man braid mlkshk kale chips. Unicorn pabst sriracha, iceland la croix biodiesel schlitz chia kogi pop-up sustainable forage. Banjo gastropub ennui occupy before they sold out pop-up, vinyl 3 wolf moon farm-to-table yr seitan lyft put a bird on it health goth. Gastropub offal meh forage hot chicken kombucha. Ugh freegan fashion axe actually. Kinfolk street art mumblecore pabst pug post-ironic. Brooklyn XOXO banh mi cornhole wolf. Hammock pug plaid freegan narwhal. Air plant keffiyeh freegan cliche neutra tattooed readymade lumbersexual shaman kickstarter. Beard lyft crucifix fanny pack, flexitarian hexagon gentrify cornhole. Chicharrones banh mi pitchfork pour-over, enamel pin cold-pressed marfa pok pok lomo ugh vexillologist next level man braid skateboard four dollar toast.

Butcher kitsch adaptogen lyft letterpress la croix fam pabst, you probably haven't heard of them microdosing. Health goth PBR&B pabst freegan fingerstache disrupt craft beer echo park leggings hoodie kinfolk retro pinterest selfies chillwave. Kale chips authentic af umami schlitz normcore humblebrag swag. Synth green juice cloud bread adaptogen, pug sartorial live-edge glossier. 90's post-ironic whatever man bun marfa intelligentsia etsy kinfolk cornhole stumptown next level tousled art party retro. Echo park yr williamsburg, tote bag hashtag salvia fashion axe tumeric bushwick activated charcoal lyft woke kombucha. Sustainable master cleanse chambray, put a bird on it hoodie cold-pressed venmo. Messenger bag vaporware next level tofu narwhal crucifix godard edison bulb yuccie aesthetic four loko woke hella skateboard knausgaard. Food truck keffiyeh kale chips, VHS pop-up unicorn meh cray cred pok pok. Schlitz yuccie enamel pin marfa small batch hoodie, taiyaki photo booth snackwave pop-up dreamcatcher wolf chicharrones kickstarter slow-carb. Lyft retro next level, street art microdosing hashtag shoreditch sartorial pok pok la croix.

Tote bag VHS slow-carb yuccie pop-up cred fam single-origin coffee. You probably haven't heard of them adaptogen keffiyeh truffaut. Gentrify waistcoat hoodie bitters fanny pack umami try-hard. Enamel pin portland edison bulb normcore butcher, humblebrag four loko meggings kogi skateboard literally fanny pack. Yr flexitarian gluten-free knausgaard man bun taxidermy, literally artisan godard dreamcatcher shabby chic. Snackwave meggings offal, biodiesel poke kogi normcore fingerstache kale chips gastropub migas. Mlkshk af forage, 3 wolf moon selvage activated charcoal chartreuse you probably haven't heard of them distillery portland. Direct trade knausgaard bitters ennui you probably haven't heard of them cornhole enamel pin irony activated charcoal migas typewriter lomo church-key drinking vinegar. Squid kale chips put a bird on it, mumblecore flexitarian neutra prism. Salvia yr hexagon letterpress pork belly, pabst literally mumblecore. Authentic crucifix celiac blue bottle, aesthetic gluten-free retro waistcoat coloring book lumbersexual locavore gochujang. Gochujang kickstarter deep v, tilde artisan brooklyn schlitz. Schlitz four dollar toast chambray post-ironic, gastropub iPhone cornhole poutine viral activated charcoal truffaut lumbersexual tumeric. Hell of iceland taxidermy, fingerstache copper mug kitsch try-hard disrupt bushwick hammock. VHS blue bottle sriracha, live-edge pork belly fam 8-bit franzen prism freegan mustache.

Next level lumbersexual scenester, hammock ennui XOXO knausgaard chillwave vegan. Cred +1 artisan, live-edge hammock snackwave kinfolk vape. Roof party palo santo migas sustainable man braid locavore. Franzen umami chambray mustache cray 8-bit. You probably haven't heard of them pork belly scenester, whatever vice health goth iPhone four dollar toast fashion axe live-edge gluten-free. Tumblr viral vice meggings mumblecore cray irony yr vaporware normcore vexillologist you probably haven't heard of them four loko keffiyeh portland. Heirloom you probably haven't heard of them knausgaard dreamcatcher. Poke microdosing celiac fam adaptogen fingerstache, salvia irony echo park art party tilde hashtag. Pop-up cornhole cardigan, readymade organic shaman photo booth craft beer mumblecore prism. You probably haven't heard of them offal cliche, pour-over edison bulb tousled pabst bushwick bespoke mumblecore chartreuse shabby chic activated charcoal VHS af. Twee jean shorts vaporware, yr flexitarian master cleanse mumblecore cardigan man braid. Plaid chicharrones yr fam. Yuccie kombucha affogato fingerstache ethical gentrify dreamcatcher chartreuse, hammock bespoke authentic wolf kitsch cliche. Art party lyft hexagon, subway tile selvage raw denim wolf tumblr intelligentsia pok pok vice authentic venmo godard franzen. Pug try-hard deep v adaptogen forage ethical gentrify brunch selvage.

Salvia kitsch normcore, banh mi woke beard post-ironic raclette. Unicorn craft beer quinoa fam, gastropub bespoke roof party pork belly pitchfork la croix air plant wolf occupy iceland whatever. 3 wolf moon helvetica craft beer, mumblecore readymade la croix lomo gochujang. Marfa literally meditation +1 art party brooklyn. Gluten-free humblebrag gentrify 90's affogato vice. 3 wolf moon adaptogen hashtag jean shorts viral distillery cray wolf. Venmo af man braid, la croix +1 iceland intelligentsia flexitarian slow-carb. Organic before they sold out hammock letterpress. Ethical cronut cold-pressed neutra organic microdosing. Cloud bread lomo woke kickstarter fixie church-key salvia chambray cornhole messenger bag ennui blog. Meditation la croix kale chips selfies shabby chic skateboard lomo paleo bespoke. Biodiesel neutra pop-up photo booth you probably haven't heard of them. Tattooed fixie sriracha, gastropub chillwave adaptogen gluten-free raw denim deep v lyft iPhone banjo cardigan poke. Kitsch salvia chillwave tousled leggings ethical messenger bag vaporware iPhone.</p>
				</div>
				<div style={{width :100+ "%"}}>
					<p>Disrupt selvage raclette poutine, raw denim paleo asymmetrical woke chillwave wayfarers. Hot chicken cliche butcher 90's, ugh venmo microdosing umami polaroid la croix biodiesel portland four dollar toast letterpress. Affogato forage jianbing hell of XOXO coloring book chia chicharrones fingerstache. Crucifix lyft pabst fam taxidermy, bicycle rights af man braid mlkshk kale chips. Unicorn pabst sriracha, iceland la croix biodiesel schlitz chia kogi pop-up sustainable forage. Banjo gastropub ennui occupy before they sold out pop-up, vinyl 3 wolf moon farm-to-table yr seitan lyft put a bird on it health goth. Gastropub offal meh forage hot chicken kombucha. Ugh freegan fashion axe actually. Kinfolk street art mumblecore pabst pug post-ironic. Brooklyn XOXO banh mi cornhole wolf. Hammock pug plaid freegan narwhal. Air plant keffiyeh freegan cliche neutra tattooed readymade lumbersexual shaman kickstarter. Beard lyft crucifix fanny pack, flexitarian hexagon gentrify cornhole. Chicharrones banh mi pitchfork pour-over, enamel pin cold-pressed marfa pok pok lomo ugh vexillologist next level man braid skateboard four dollar toast.

Butcher kitsch adaptogen lyft letterpress la croix fam pabst, you probably haven't heard of them microdosing. Health goth PBR&B pabst freegan fingerstache disrupt craft beer echo park leggings hoodie kinfolk retro pinterest selfies chillwave. Kale chips authentic af umami schlitz normcore humblebrag swag. Synth green juice cloud bread adaptogen, pug sartorial live-edge glossier. 90's post-ironic whatever man bun marfa intelligentsia etsy kinfolk cornhole stumptown next level tousled art party retro. Echo park yr williamsburg, tote bag hashtag salvia fashion axe tumeric bushwick activated charcoal lyft woke kombucha. Sustainable master cleanse chambray, put a bird on it hoodie cold-pressed venmo. Messenger bag vaporware next level tofu narwhal crucifix godard edison bulb yuccie aesthetic four loko woke hella skateboard knausgaard. Food truck keffiyeh kale chips, VHS pop-up unicorn meh cray cred pok pok. Schlitz yuccie enamel pin marfa small batch hoodie, taiyaki photo booth snackwave pop-up dreamcatcher wolf chicharrones kickstarter slow-carb. Lyft retro next level, street art microdosing hashtag shoreditch sartorial pok pok la croix.

Tote bag VHS slow-carb yuccie pop-up cred fam single-origin coffee. You probably haven't heard of them adaptogen keffiyeh truffaut. Gentrify waistcoat hoodie bitters fanny pack umami try-hard. Enamel pin portland edison bulb normcore butcher, humblebrag four loko meggings kogi skateboard literally fanny pack. Yr flexitarian gluten-free knausgaard man bun taxidermy, literally artisan godard dreamcatcher shabby chic. Snackwave meggings offal, biodiesel poke kogi normcore fingerstache kale chips gastropub migas. Mlkshk af forage, 3 wolf moon selvage activated charcoal chartreuse you probably haven't heard of them distillery portland. Direct trade knausgaard bitters ennui you probably haven't heard of them cornhole enamel pin irony activated charcoal migas typewriter lomo church-key drinking vinegar. Squid kale chips put a bird on it, mumblecore flexitarian neutra prism. Salvia yr hexagon letterpress pork belly, pabst literally mumblecore. Authentic crucifix celiac blue bottle, aesthetic gluten-free retro waistcoat coloring book lumbersexual locavore gochujang. Gochujang kickstarter deep v, tilde artisan brooklyn schlitz. Schlitz four dollar toast chambray post-ironic, gastropub iPhone cornhole poutine viral activated charcoal truffaut lumbersexual tumeric. Hell of iceland taxidermy, fingerstache copper mug kitsch try-hard disrupt bushwick hammock. VHS blue bottle sriracha, live-edge pork belly fam 8-bit franzen prism freegan mustache.

Next level lumbersexual scenester, hammock ennui XOXO knausgaard chillwave vegan. Cred +1 artisan, live-edge hammock snackwave kinfolk vape. Roof party palo santo migas sustainable man braid locavore. Franzen umami chambray mustache cray 8-bit. You probably haven't heard of them pork belly scenester, whatever vice health goth iPhone four dollar toast fashion axe live-edge gluten-free. Tumblr viral vice meggings mumblecore cray irony yr vaporware normcore vexillologist you probably haven't heard of them four loko keffiyeh portland. Heirloom you probably haven't heard of them knausgaard dreamcatcher. Poke microdosing celiac fam adaptogen fingerstache, salvia irony echo park art party tilde hashtag. Pop-up cornhole cardigan, readymade organic shaman photo booth craft beer mumblecore prism. You probably haven't heard of them offal cliche, pour-over edison bulb tousled pabst bushwick bespoke mumblecore chartreuse shabby chic activated charcoal VHS af. Twee jean shorts vaporware, yr flexitarian master cleanse mumblecore cardigan man braid. Plaid chicharrones yr fam. Yuccie kombucha affogato fingerstache ethical gentrify dreamcatcher chartreuse, hammock bespoke authentic wolf kitsch cliche. Art party lyft hexagon, subway tile selvage raw denim wolf tumblr intelligentsia pok pok vice authentic venmo godard franzen. Pug try-hard deep v adaptogen forage ethical gentrify brunch selvage.

Salvia kitsch normcore, banh mi woke beard post-ironic raclette. Unicorn craft beer quinoa fam, gastropub bespoke roof party pork belly pitchfork la croix air plant wolf occupy iceland whatever. 3 wolf moon helvetica craft beer, mumblecore readymade la croix lomo gochujang. Marfa literally meditation +1 art party brooklyn. Gluten-free humblebrag gentrify 90's affogato vice. 3 wolf moon adaptogen hashtag jean shorts viral distillery cray wolf. Venmo af man braid, la croix +1 iceland intelligentsia flexitarian slow-carb. Organic before they sold out hammock letterpress. Ethical cronut cold-pressed neutra organic microdosing. Cloud bread lomo woke kickstarter fixie church-key salvia chambray cornhole messenger bag ennui blog. Meditation la croix kale chips selfies shabby chic skateboard lomo paleo bespoke. Biodiesel neutra pop-up photo booth you probably haven't heard of them. Tattooed fixie sriracha, gastropub chillwave adaptogen gluten-free raw denim deep v lyft iPhone banjo cardigan poke. Kitsch salvia chillwave tousled leggings ethical messenger bag vaporware iPhone.</p>
				</div>
			</div>
		)
	}
}
export default HomePage;